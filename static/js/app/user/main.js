import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import {getURL} from '../../oss/oss'
import {Link} from 'react-router-dom';
import {dateformat, guid, openPlayer} from '../../util/utils'
import logo from '../../../image/logo.png';
import co from 'co';


class Info extends MuComponent {


  constructor(props) {
    super(props);
    this.requestFriend = this.requestFriend.bind(this);
    this.state = {
      friend: -1,
    }
  }

  requestFriend() {
    var self = this;
    fetch('/api/user/friend/request', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        friendId: self.props.info.id
      })
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        self.setState({
          friend: 3
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      friend: nextProps.info.friend
    });
  }

  render() {

    var friendButton = null;
    if (this.state.friend === 2) {
      friendButton = (
        <div className="ui primary button" onClick={this.requestFriend}>
          添加好友
        </div>
      );
    } else if (this.state.friend === 3) {
      friendButton = (
        <div className="ui button disabled">
          好友请求中
        </div>
      );
    } else if (this.state.friend === 4) {
      friendButton = (
        <div className="ui button disabled">
          已是好友
        </div>
      );
    }

    return (
      <div className="info">
        <div className="ui container">
          <div className="avatar">
            <img className="ui medium circular image"
                 src={this.props.info.avatar === '' ? '/image/avatar.png' : getURL(this.props.info.avatar)}/>
          </div>
          <div className="name">
            {this.props.info.name}
          </div>
          <div className="ui divider"></div>
          <div className="description">
            {this.props.info.description}
          </div>
          <div className="friend">
            {friendButton}
          </div>
        </div>
      </div>
    );
  }
}

class Sheets extends MuComponent {

  render() {

    var publicSheets = this.props.publicSheets.map(function (sheet) {
      return (
        <Link
          to={`/sheet/${sheet.id}`}
          className="card"
          data-id={sheet.id}>
          <div className="image">
            <img
              src={sheet.cover === '' ? '/image/cover.jpg' : getURL(sheet.cover)}/>
          </div>
          <div className="content">
            <div className="description">
              {sheet.name}
            </div>
          </div>
        </Link>
      );
    });

    var privateSheets = this.props.privateSheets.map(function (sheet) {
      return (
        <Link
          to={`/sheet/${sheet.id}`}
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

    var friendSheets = this.props.friendSheets.map(function (sheet) {
      return (
        <Link
          to={`/sheet/${sheet.id}`}
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

    var publicHeader = null;
    var friendHeader = null;
    var privateHeader = null;

    if (publicSheets.length > 0) {
      publicHeader = (
        <div>
          <div className="ui medium header">
            公开歌单
          </div>
          <div className="ui divider"></div>
        </div>
      );
    }

    if (friendSheets.length > 0) {
      friendHeader = (
        <div>
          <div className="ui medium header">
            对好友公开歌单
          </div>
          <div className="ui divider"></div>
        </div>
      );
    }

    if (privateSheets.length > 0) {
      privateHeader = (
        <div>
          <div className="ui medium header">
            私有歌单
          </div>
          <div className="ui divider"></div>
        </div>
      );
    }

    return (
      <div className="sheets">
        {publicHeader}
        <div className="ui four link cards public-sheet">
          {publicSheets}
        </div>
        {friendHeader}
        <div className="ui four link cards friend-sheet">
          {friendSheets}
        </div>
        {privateHeader}
        <div className="ui four link cards private-sheet">
          {privateSheets}
        </div>
      </div>
    );
  }
}

class User extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      info: {
        avatar: '',
        name: '',
        description: '',
        friend: -1
      },
      publicSheets: [],
      friendSheets: [],
      privateSheets: []
    }
    this.loadUserInfo = this.loadUserInfo.bind(this);
  }

  loadUserInfo() {
    var self = this;
    var userId = this.props.match.params.userId;
    fetch(`/api/music/sheet/list?toId=${userId}`, {
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
        var info = {
          id: data.body.id,
          friend: data.body.friend,
          avatar: data.body.avatar,
          name: data.body.name,
          description: data.body.description
        }
        var publicSheets = data.body.sheets.filter(function (sheet) {
          return sheet.privilege === 'public';
        });
        var friendSheets = data.body.sheets.filter(function (sheet) {
          return sheet.privilege === 'friend';
        });
        var privateSheets = data.body.sheets.filter(function (sheet) {
          return sheet.privilege === 'private';
        })
        self.setState({
          info: info,
          publicSheets: publicSheets,
          friendSheets: friendSheets,
          privateSheets: privateSheets
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  componentDidMount() {
    this.loadUserInfo();
  }

  render() {
    return (
      <div className="user">
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Info
                info={this.state.info}/>
            </div>
            <div className="twelve wide column">
              <Sheets
                publicSheets={this.state.publicSheets}
                friendSheets={this.state.friendSheets}
                privateSheets={this.state.privateSheets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;