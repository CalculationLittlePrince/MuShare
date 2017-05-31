import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import {getURL} from '../../oss/oss'

class SheetInfo extends MuComponent {
  render() {
    return (
      <div className="sheet-info ui container">
        <div className="ui two column centered grid">
          <div className="column">
            <div className="ui items">
              <div className="item">
                <div className="ui middle cover aligned image">
                  <img src={this.props.sheetInfo.cover} alt=""/>
                </div>
                <div className="middle aligned content">
                  <div className="ui huge header">{this.props.sheetInfo.sheetName}</div>
                  <div className="meta">
                    <img className="ui avatar image"
                         src={this.props.sheetInfo.creatorAvatar}/>
                    <a href="" className="username">{this.props.sheetInfo.creator}</a>
                    <span
                      className="modify-date">上次修改日期：{this.props.sheetInfo.lastModified}</span>
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
  render() {

    var rows = this.props.audioList.map(function (audio, index) {
      return (
        <tr>
          <td>{index}</td>
          <td>
            <span>{audio.name}</span>
            <span className="operations">
            <i className="folder icon"></i>
            <i className="folder icon"></i>
            <i className="folder icon"></i>
            </span>
          </td>
          <td>{audio.artist}</td>
          <td>{audio.duration}</td>
        </tr>
      );
    });

    return (
      <table className="ui striped table">
        <thead>
        <tr>
          <th></th>
          <th>音乐标题</th>
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

class AudioContent extends MuComponent {
  render() {
    return (
      <div className="audio-content ui container">
        <div className="ui divider"></div>
        <div className="ui top attached tabular menu">
          <a className="item active" data-tab="audioList">歌曲列表</a>
          <a className="item" data-tab="comments">评论</a>
        </div>
        <div className="ui bottom active attached tab segment audio-list"
             data-tab="audioList">
          <AudioList
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
        cover: '',
      },
      audioList: []
    }

  }

  componentDidMount() {
    $('.sheet-page .audio-list .menu .item').tab();
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
        console.log(data.body);
        var sheetInfo = {
          sheetName: data.body.name,
          cover: data.body.cover === '' ? '/image/avatar' : getURL(data.body.cover),
          creator: data.body.user.name,
          creatorAvatar: data.body.user.avatar === '' ? '/image/avatar' : getURL(data.body.user.avatar),
          lastModified: '',
        };
        var audioList = data.body.audio.map(function (audio) {
          return {
            id: audio.id,
            name: audio.name,
            artist: audio.artist.name,
            duration: audio.duration,
          }
        });
        self.setState({
          sheetInfo: sheetInfo,
          audioList: audioList
        });
      })
      .then(function (error) {

      });
  }

  render() {
    return (
      <div className="sheet-page">
        <SheetInfo
          sheetInfo={this.state.sheetInfo}/>
        <AudioContent
          audioList={this.state.audioList}/>
      </div>
    );
  }
}

export default SheetPage;