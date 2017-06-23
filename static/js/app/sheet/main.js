import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import {getURL} from '../../oss/oss'
import {dateformat, guid, openPlayer} from '../../util/utils'
import {Link} from 'react-router-dom';
import logo from '../../../image/logo.png';
import co from 'co';
import {uploadAudio} from '../../oss/upload'

class SheetInfo extends MuComponent {
  render() {

    var bgStyle = {
      backgroundImage: 'url("' + this.props.sheetInfo.cover + '")'
    }

    return (
      <div className="sheet-info">
        <div className="bg" style={bgStyle}></div>
        <div className="ui container">
          <div className="ui two column centered grid">
            <div className="column">
              <div className="ui items">
                <div className="item">
                  <div className="ui middle raised cover aligned image">
                    <img src={this.props.sheetInfo.cover} alt=""/>
                  </div>
                  <div className="middle aligned content">
                    <div
                      className="ui huge header sheetname">{this.props.sheetInfo.sheetName}</div>
                    <div className="meta">
                      <img className="ui avatar image"
                           src={this.props.sheetInfo.creatorAvatar}/>
                      <Link to={`/user/${this.props.sheetInfo.userId}`}
                            className="username">{this.props.sheetInfo.creator}</Link>
                      <span
                        className="modify-date">上次修改日期：{this.props.sheetInfo.lastModified}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AudioList extends MuComponent {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  timeConvert(time) {
    var min;
    var sec;
    min = Math.floor(time / 60);
    min = min >= 10 ? '' + min : '0' + min;
    sec = Math.floor(time % 60);
    sec = sec >= 10 ? '' + sec : '0' + sec;
    return min + ':' + sec;
  }

  play(audio) {
    var self = this;
    var token = $('#token').val();
    fetch('/api/user/player/add', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      },
      body: JSON.stringify({
        audioId: audio.id
      })
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function () {
        console.log("add into play list");
        var array = [];
        array.push(audio);
        openPlayer(array);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {

    var delIcon = null;
    if (this.props.owner) {
      delIcon = (
        <i className="remove icon"></i>
      );
    }

    var self = this;
    var rows = this.props.audioList.map(function (audio, index) {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>
            <span>{audio.name}</span>
          </td>
          <td>
            <span className="operations">
            <i className="play icon"
               onClick={() => self.play(audio)}></i>
            <i className="plus icon"></i>
              {delIcon}
            </span>
          </td>
          <td>{audio.artist}</td>
          <td>{self.timeConvert(audio.duration)}</td>
        </tr>
      );
    });

    return (
      <table className="ui striped table">
        <thead>
        <tr>
          <th></th>
          <th>音乐标题</th>
          <th></th>
          <th>歌手</th>
          <th>时长</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
}


class UploadAudioModal extends MuComponent {
  constructor(props) {
    super(props);
    this.state = {
      filename: '',
      uploading: false,
      progress: 0,
      artists: [],
    }
    this.audio = {
      name: '',
      artist: '',
      audioFile: null,
      duration: 0
    }
    this.loadArtists = this.loadArtists.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.uploadAudio = this.uploadAudio.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.audio.name = '';
    this.audio.audioFile = null;
    this.audio.duration = 0;
    this.setState({
      filename: '',
      uploading: false,
      progress: 0,
    });
    $('#upload-audio-modal .form .audio-name').val('');
    $('#upload-audio-modal .form .audio-file').val('');
  }


  loadArtists() {
    var self = this;
    fetch('/api/music/artist/get', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      }
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        self.setState({
          artists: result.body
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  uploadAudio() {
    var self = this;
    var token = $('#token').val();
    if (self.audio.audioFile === null ||
      self.audio.name === '' ||
      self.audio.artist === '' ||
      self.audio.duration === 0) {
      alert('some file is empty');
      return;
    }
    this.setState({
      uploading: true
    });
    co(function*() {
      try {
        var artist = yield fetch('/api/music/artist/add', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Authorization': token
          },
          body: JSON.stringify({
            name: self.audio.artist.toString(),
          })
        })
          .then(self.checkStatus)
          .then(self.parseJSON)
        var audio = yield uploadAudio(`audio-${guid()}`, self.audio.audioFile, token, function (progress) {
          self.setState({
            progress: parseInt(progress * 100)
          });
        });
        var result = yield fetch('/api/music/audio/add', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Authorization': token
          },
          body: JSON.stringify({
            name: self.audio.name,
            artistId: artist === null ? parseInt(self.audio.artistId) : artist.body.id,
            audioUrl: audio.name,
            sheetId: parseInt(self.props.sheetId),
            duration: self.audio.duration
          })
        })
          .then(self.checkStatus)
          .then(self.parseJSON)
        return result;
      } catch (error) {
        throw error
      }
    }).then(function (result) {
      $('#upload-audio-modal').modal('hide');
      self.clear();
      self.props.loadSheet();
    }, function (error) {
      console.log(error);
      $('#upload-audio-modal').modal('hide');
      alert("上传失败");
      self.clear();
    });
  }

  getAudioDuration(file, callback) {
    var url = URL.createObjectURL(file);
    var audio = new Audio(url);
    audio.onloadedmetadata = function () {
      console.log('onloadedmetadata');
      callback(parseInt(audio.duration));
    }
    audio.onerror = function () {
      console.log('not audio file');
      callback();
    }
  }

  handleChange(event) {
    var self = this;
    if (event.target.name === 'audio-file') {
      var file = event.target.files[0];
      this.getAudioDuration(event.target.files[0], function (duration) {
        if (duration) {
          self.audio.audioFile = file;
          self.audio.duration = duration;
          self.setState({
            filename: file.name
          });
        } else {
          alert('Not Audio File');
        }
      })
    } else if (event.target.name === 'audio-name') {
      this.audio.name = event.target.value;
    }
  }

  componentDidMount() {
    var self = this;
    $('#upload-audio-modal .form .dropdown').dropdown({
      allowAdditions: true,
      onChange: function (key, value) {
        console.log(value);
        self.audio.artist = value;
      }
    });
    this.loadArtists();
  }

  componentDidUpdate() {
  }

  render() {
    var artists = this.state.artists.map(function (artist) {
      return (
        <option value={artist.id}>{artist.name}</option>
      );
    });
    var button = null;
    if (this.state.uploading) {
      button = (
        <button className="ui fluid button" onClick={this.uploadAudio}>
          <i className="spinner loading icon"></i>上传中...
          <span>{`${this.state.progress}%`}</span>
        </button>
      );
    } else {
      button = (
        <button className="ui fluid button" onClick={this.uploadAudio}>
          上传
        </button>
      );
    }
    return (
      <div className="ui small modal" id="upload-audio-modal">
        <div className="ui container">
          <div className="ui items">
            <div className="item">
              <div className="ui image">
                <img src={logo} alt=""/>
              </div>
              <div className="middle aligned content">
                <h3>上传歌曲</h3>
              </div>
            </div>
          </div>
          <div className="ui form">
            <div className="field">
              <label>歌单名</label>
              <input type="text"
                     name="audio-name"
                     className="audio-name"
                     placeholder="歌曲名"
                     onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>歌手</label>
              <select name="privilege" className="ui fluid search dropdown">
                <option value="">选择歌手</option>
                {artists}
              </select>
            </div>
            <div className="field">
              <input type="file"
                     name="audio-file"
                     id="audio-file"
                     className="audio-file"
                     onChange={this.handleChange}/>
              <label htmlFor="audio-file">歌曲文件</label>
              <p>{this.state.filename}</p>
            </div>
            {button}
          </div>
        </div>
      </div>
    );
  }
}

class AudioContent extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.owner,
      subscribed: this.props.subscribed
    }
    this.subscribe = this.subscribe.bind(this);
    this.openUploadAudioModal = this.openUploadAudioModal.bind(this);
  }

  openUploadAudioModal() {
    $('#upload-audio-modal')
      .modal({
        detachable: false
      })
      .modal('show');
  }

  subscribe() {
    var token = $('#token').val();
    var self = this;
    fetch('/api/music/sheet/subscribe', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      },
      body: JSON.stringify({
        toId: parseInt(this.props.sheetId)
      })
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function () {
        alert("订阅成功");
        self.setState({
          subscribed: true
        });
      })
      .catch(function (error) {
        alert("订阅失败");
        console.error(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      owner: nextProps.owner,
      subscribed: nextProps.subscribed
    });
  }

  render() {

    var button = null;

    if (this.state.owner && !this.state.subscribed) {
      button = (
        <button
          className="ui primary button"
          onClick={this.openUploadAudioModal}>
          上传歌曲
        </button>
      );
    } else if (!this.state.owner && this.state.subscribed) {
      button = (
        <button
          className="ui disabled button">
          已订阅
        </button>
      );
    } else if (!this.state.owner && !this.state.subscribed) {
      button = (
        <button
          className="ui primary button"
          onClick={this.subscribe}>
          订阅歌单
        </button>
      );
    }

    return (
      <div className="audio-content ui container">
        <div className="ui divider"></div>
        <div className="ui top attached tabular menu">
          <a className="item active" data-tab="audioList">歌曲列表</a>
          <a className="item" data-tab="comments">评论</a>
        </div>
        <div className="ui bottom active attached tab segment audio-list"
             data-tab="audioList">
          <UploadAudioModal
            loadSheet={this.props.loadSheet}
            sheetId={this.props.sheetId}/>
          {button}
          <AudioList
            owner={this.props.owner}
            audioList={this.props.audioList}/>
        </div>
        <div className="ui bottom attached tab segment" data-tab="comments">
        </div>
      </div>
    );
  }
}

class SheetPage extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      sheetInfo: {
        sheetName: '',
        creator: '',
        creatorAvatar: '',
        lastModified: '',
        cover: '/image/cover.jpg',
      },
      audioList: [],
      owner: true,
      subscribed: true,
    }
    this.loadSheet = this.loadSheet.bind(this);
  }

  loadSheet() {
    var self = this;
    var sheetId = this.props.match.params.sheetId;
    var url = '/api/music/audio/list?sheetId=' + sheetId;
    fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      }
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        var sheetInfo = {
          userId: data.body.user.id,
          sheetName: data.body.name,
          cover: data.body.cover === '' ? '/image/cover.jpg' : getURL(data.body.cover),
          creator: data.body.user.name,
          creatorAvatar: data.body.user.avatar === '' ? '/image/avatar.png' : getURL(data.body.user.avatar),
          lastModified: dateformat(data.body.update_at * 1000),
        };
        var audioList = data.body.audio.map(function (audio) {
          return {
            id: audio.id,
            name: audio.name,
            audioUrl: audio.audioUrl,
            artist: audio.artist.name,
            duration: audio.duration,
            sheet: data.body.name,
            cover: data.body.cover,
          }
        });
        self.setState({
          sheetInfo: sheetInfo,
          audioList: audioList,
          owner: data.body.owner,
          subscribed: data.body.subscribed
        });
      })
      .catch(function (error) {
        console.error(error)
      });
  }

  componentDidMount() {
    $('.sheet-page .audio-list .menu .item').tab();
    this.loadSheet();
  }

  render() {
    return (
      <div className="sheet-page">
        <SheetInfo
          sheetInfo={this.state.sheetInfo}/>
        <AudioContent
          loadSheet={this.loadSheet}
          audioList={this.state.audioList}
          sheetId={this.props.match.params.sheetId}
          owner={this.state.owner}
          subscribed={this.state.subscribed}/>
      </div>
    );
  }
}

export default SheetPage;