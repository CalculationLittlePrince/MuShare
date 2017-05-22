import React from 'react';
import MuComponent from '../../util/mushare-react-component';

class SheetInfo extends MuComponent {
  render() {
    return (
      <div className="sheet-info ui container">
        <div className="ui two column centered grid">
          <div className="column">
            <div className="ui items">
              <div className="item">
                <div className="ui middle cover aligned image">
                  <img src="/image/avatar.png" alt=""/>
                </div>
                <div className="middle aligned content">
                  <div className="ui huge header">Sheet Name</div>
                  <div className="meta">
                    <img className="ui avatar image"
                         src="/image/avatar.png"/>
                    <a href="" className="username">Username</a>
                    <span className="modify-date">上次修改日期：2017-7-10</span>
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
    return (
      <table className="ui striped table">
        <thead>
        <tr>
          <th></th>
          <th>音乐标题</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时常</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>
            <span>John Lilki</span>
            <span className="operations">
            <i className="folder icon"></i>
            <i className="folder icon"></i>
            <i className="folder icon"></i>
            </span>
          </td>
          <td>September 14, 2013</td>
          <td>jhlilk22@yahoo.com</td>
          <td>No</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <span>Jamie Harington</span>
            <span className="operations">
            <i className="folder icon"></i>
            <i className="folder icon"></i>
            <i className="folder icon"></i>
            </span>
          </td>
          <td>January 11, 2014</td>
          <td>jamieharingonton@yahoo.com</td>
          <td>Yes</td>
        </tr>
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
          <AudioList/>
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
  }

  componentDidMount() {
    $('.sheet-page .audio-list .menu .item').tab();
    var self = this;
    var sheetId = this.props.match.params.sheetId;
    console.log(sheetId);
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
        console.log(data);
      })
      .then(function (error) {

      });
  }

  render() {
    return (
      <div className="sheet-page">
        <SheetInfo/>
        <AudioContent/>
      </div>
    );
  }
}

export default SheetPage;