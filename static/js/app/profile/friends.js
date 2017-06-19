import React from 'react';
import MuComponent from '../../util/mushare-react-component';
import {getURL} from '../../oss/oss'
import {Link} from 'react-router-dom';

class FriendList extends MuComponent {
  render() {
    var friendList = this.props.friends.map(function (friend) {
      return (
        <div className="item">
          <img className="ui avatar image" src={friend.avatar === '' ? "/image/avatar.png" : getURL(friend.avatar)}/>
          <div className="content">
            <Link to={`/user/${friend.id}`} className="header">{friend.name}</Link>
          </div>
        </div>
      );
    });

    return (
      <div className="ui middle aligned animated divided large list">
        {friendList}
      </div>
    );
  }
}


function AcceptButton(props) {
  if (props.accept) {
    return (
      <div
        className="ui button disabled"
        data-friend-id={props.id}>
        已接受
      </div>
    );
  } else {
    return (
      <div
        className="ui button"
        data-friend-id={props.id}
        onClick={props.acceptFriendRequest}>
        接受
      </div>
    );
  }
};

class FriendRequestList extends MuComponent {

  render() {
    var self = this;
    var friendList = this.props.friends.map(function (friend) {
      return (
        <div className="item">
          <div className="right floated content">
            <AcceptButton
              id={friend.id}
              accept={friend.accept}
              acceptFriendRequest={self.props.acceptFriendRequest}/>
          </div>
          <img className="ui avatar image" src={friend.avatar === '' ? "/image/avatar.png" : getURL(friend.avatar)}/>
          <div className="content">
            <Link to={`/user/${friend.id}`} className="header">{friend.name}</Link>
          </div>
        </div>
      );
    });

    return (
      <div className="ui middle aligned divided large list">
        {friendList}
      </div>
    );
  }
}

class Friends extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendRequests: [],
    };
    this.acceptFriendRequest = this.acceptFriendRequest.bind(this);
  }

  loadFriends() {
    var self = this;
    fetch('/api/user/friend/list', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      },
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        var friends = data.body;
        self.setState({
          friends: friends
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadFriendRequests() {
    var self = this;
    fetch('/api/user/friend/request', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      },
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        var friendRequests = data.body.map(function (friendRequest) {
          friendRequest.accept = false;
          return friendRequest;
        });
        self.setState({
          friendRequests: friendRequests
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  acceptFriendRequest(event) {
    var self = this;
    var friendId = $(event.target).data("friendId");
    fetch('/api/user/friend/request', {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Authorization': $('#token').val()
      },
      body: JSON.stringify({
        friendId: friendId
      })
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function () {
        var friendRequests = self.state.friendRequests.map(function (friendRequest) {
          if (friendRequest.id == friendId) {
            friendRequest.accept = true;
          }
          return friendRequest;
        });
        self.setState({
          friendRequests: friendRequests
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadFriends();
    this.loadFriendRequests();
  }

  render() {
    return (
      <div className="friends">
        <div className="ui medium header">
          好友请求
        </div>
        <div className="ui divider"></div>
        <div className="friends-list">
          <FriendRequestList
            friends={this.state.friendRequests}
            acceptFriendRequest={this.acceptFriendRequest}/>
        </div>
        <div className="ui medium header">
          好友列表
        </div>
        <div className="ui divider"></div>
        <div className="friends-list">
          <FriendList
            friends={this.state.friends}/>
        </div>
      </div>
    );
  }
}

export default Friends;