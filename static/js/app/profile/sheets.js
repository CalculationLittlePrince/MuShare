import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import logo from '../../../image/logo.png';
import {guid} from '../../util/utils';
import {uploadSheetCover} from '../../oss/upload';
import {getURL} from '../../oss/oss'
import co from 'co';
import '../../vendor/cropper.min.js';
import '../../../scss/cropper.min.css'
import {Link} from 'react-router-dom';

class SheetCoverCropperModal extends MuComponent {
  constructor(props) {
    super(props);
    this.receiveInputCover = this.receiveInputCover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.props.eventEmitter.addListener('receive-input-cover', this.receiveInputCover);
    this.imgcut = '';
    this.state = {
      url: ''
    }
  }

  receiveInputCover(cover) {
    var url = URL.createObjectURL(cover);
    $('#sheet-cover-cropper-modal img').cropper('destroy');
    this.setState({
      url: url
    });
  }

  handleClick() {
    this.props.eventEmitter.emit('receive-img-cut', this.imgcut);
    $('#sheet-cover-cropper-modal').modal('hide');
  }

  componentDidUpdate() {
    var self = this;
    $('#sheet-cover-cropper-modal img').cropper({
      aspectRatio: 1,
      crop: function (e) {
        self.imgcut = `x_${e.x < 0 ? 0 : Math.floor(e.x)},` +
          `y_${e.y < 0 ? 0 : Math.floor(e.y)},` +
          `w_${Math.floor(e.width)},` +
          `h_${Math.floor(e.height)}`;
      }
    });
  }

  render() {
    return (
      <div className="ui small couple modal" id="sheet-cover-cropper-modal">
        <div className="ui container">
          <div className="avatar-wrapper">
            <img src={this.state.url} alt=""/>
          </div>
          <button className="ui fluid button" onClick={this.handleClick}>确定
          </button>
        </div>
      </div>
    );
  }
}

class CreateSheetModal extends MuComponent {
  constructor(props) {
    super(props);
    this.sheet = {
      name: '',
      privilege: '',
      coverFile: null,
    }
    this.state = {
      creating: false
    }
    this.imgcut = '';
    this.receiveImgCut = this.receiveImgCut.bind(this);
    this.createSheet = this.createSheet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.eventEmitter.addListener('receive-img-cut', this.receiveImgCut);
  }


  receiveImgCut(imgcut) {
    console.log(imgcut);
    this.imgcut = imgcut;
  }

  handleChange(event) {
    if (event.target.type === 'file') {
      this.props.eventEmitter.emit('receive-input-cover', event.target.files[0]);
      $('#sheet-cover-cropper-modal').modal('show');
      this.sheet.coverFile = event.target.files[0];
    } else {
      this.sheet[event.target.name] = event.target.value;
    }
  }

  closeModal() {
    this.props.onSheetCreated();
    $('#create-sheet-modal .form .name').val('');
    $('#create-sheet-modal .form .sheet-cover-file').val('');
    $('#create-sheet-modal .form .dropdown').dropdown('clear');
  }

  createSheet() {
    var self = this;
    if (this.sheet.coverFile === null) {
      return;
    }
    this.setState({
      creating: true
    });
    co(function*() {
      var token = $('#token').val();
      var objectId = 'sheetcover-' + guid();
      var cover = yield uploadSheetCover(objectId, self.sheet.coverFile, token);
      console.log(cover);
      var result = yield fetch('/api/music/sheet/create', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Authorization': token
        },
        body: JSON.stringify({
          name: self.sheet.name,
          privilege: self.sheet.privilege,
          cover: cover.name + `?x-oss-process=image/crop,${self.imgcut}`
        })
      })
        .then(self.checkStatus)
        .then(self.parseJSON)
      return result;
    })
      .then(function (result) {
        self.setState({
          creating: false
        });
        self.closeModal();
      }, function (error) {
        self.setState({
          creating: false
        });
      });
  }

  componentDidMount() {
    var self = this;
    $('#create-sheet-modal .form .dropdown').dropdown({
      onChange: function (value) {
        console.log(value);
        self.sheet.privilege = value;
      }
    });
  }

  render() {
    var button = null;
    if (this.state.creating) {
      button = (
        <button className="ui fluid button" onClick={this.createSheet}>
          <i className="spinner loading icon"></i>创建中...
        </button>
      );
    } else {
      button = (
        <button className="ui fluid button" onClick={this.createSheet}>
          创建
        </button>
      );
    }
    return (
      <div className="ui small couple modal" id="create-sheet-modal">
        <div className="ui container">
          <div className="ui items">
            <div className="item">
              <div className="ui image">
                <img src={logo} alt=""/>
              </div>
              <div className="middle aligned content">
                <h3>创建歌单</h3>
              </div>
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>歌单名</label>
              <input type="text" name="name" className="name"
                     placeholder="歌单名" onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>权限</label>
              <select name="privilege" className="ui fluid dropdown">
                <option value="">选择权限</option>
                <option value="public">对所有人公开</option>
                <option value="friend">对好友公开</option>
                <option value="private">私有</option>
              </select>
            </div>
            <div className="field">
              <input type="file" name="sheet-cover-file" id="sheet-cover-file"
                     className="sheet-cover-file"
                     onChange={this.handleChange}/>
              <label htmlFor="sheet-cover-file">上传封面</label>
            </div>
            {button}
          </div>
        </div>
      </div>
    );
  }
}

class SheetCards extends MuComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var cards = this.props.sheets.map(function (sheet) {
      return (
        <Link
          to={`/app/sheet/${sheet.id}`}
          className="card"
          data-id={sheet.id}>
          <div className="image">
            <img
              src={sheet.cover === '' ? '/image/avatar.png' : getURL(sheet.cover)}/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="ui four link cards">
        {cards}
        <div
          className="card"
          onClick={this.props.openCreateSheetModal}>
          <div className="ui content">
            <div className="ui middle aligned grid">
              <div className="row">
                <div className="column">
                  <i className="huge plus icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Sheets extends MuComponent {
  constructor(props) {
    super(props);
    this.state = {
      privateSheet: [],
      publicSheet: []
    };
    this.eventEmitter = new EventEmitter();
    this.onSheetCreated = this.onSheetCreated.bind(this);
    this.openCreateSheetModal = this.openCreateSheetModal.bind(this);
  }

  openCreateSheetModal() {
    $('#create-sheet-modal').modal('show');
  }

  onSheetCreated() {
    $('#create-sheet-modal').modal('hide');
    this.loadSheet();
  }


  loadSheet() {
    var self = this;
    fetch('/api/music/sheet/list', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      },
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        var sheets = data.body;
        var privateSheet = sheets.filter(function (sheet) {
          return sheet.privilege === 'private';
        });
        var publicSheet = sheets.filter(function (sheet) {
          return sheet.privilege === 'public' || sheet.privilege === 'friend';
        });
        console.log(privateSheet);
        console.log(publicSheet);
        self.setState({
          privateSheet: privateSheet,
          publicSheet: publicSheet
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadSheet();
    $('.sheets .couple.modal')
      .modal({
        detachable: false,
        allowMultiple: true
      });
  }

  render() {
    return (
      <div className="sheets">
        <CreateSheetModal
          eventEmitter={this.eventEmitter}
          onSheetCreated={this.onSheetCreated}
        />
        <SheetCoverCropperModal
          eventEmitter={this.eventEmitter}
        />
        <div className="ui medium header">
          公开歌单
        </div>
        <div className="ui divider"></div>
        <div className="public-sheet">
          <SheetCards
            sheets={this.state.publicSheet}
            openCreateSheetModal={this.openCreateSheetModal}
            createSheet={this.createSheet}/>
        </div>
        <div className="ui medium header">
          私有歌单
        </div>
        <div className="ui divider"></div>
        <div className="private-sheet">
          <SheetCards
            sheets={this.state.privateSheet}
            openCreateSheetModal={this.openCreateSheetModal}
            createSheet={this.createSheet}/>
        </div>
      </div>
    );
  }
}

export default Sheets;