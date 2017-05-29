import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import logo from '../../../image/logo.png';
import {guid} from '../../util/utils';
import {uploadSheetCover} from '../../oss/upload';
import {getURL} from '../../oss/oss'
import co from 'co';

class CreateSheetModal extends MuComponent {
  constructor(props) {
    super(props);
    this.sheet = {
      name: '',
      privilege: '',
      coverFile: null,
    }
    this.createSheet = this.createSheet.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.type === 'file') {
      this.sheet.coverFile = event.target.files[0];
    } else {
      this.sheet[event.target.name] = event.target.value;
    }
  }

  createSheet() {
    var self = this;
    if (this.sheet.coverFile === null) {
      return;
    }
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
          cover: cover.name
        })
      })
        .then(self.checkStatus)
        .then(self.parseJSON)
      return result;
    })
      .then(function (result) {
        console.log(result);
      }, function (error) {

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
    return (
      <div className="ui small login modal" id="create-sheet-modal">
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
              <input type="text" name="name"
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
            <button className="ui fluid button" onClick={this.createSheet}>创建
            </button>
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
        <div className="card">
          <div className="image">
            <img src={sheet.cover === '' ? '/image/avatar.png' :getURL(sheet.cover)}/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </div>
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
    $('#create-sheet-modal')
      .modal({
        detachable: false
      })
      .modal('show');
  }

  onSheetCreated() {
    $('#create-sheet-modal')
      .modal('hide');
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
  }

  render() {
    return (
      <div className="sheets">
        <CreateSheetModal
          eventEmitter={this.eventEmitter}
          onSheetCreated={this.onSheetCreated}
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