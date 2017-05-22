import React from 'react';
import MuComponent from '../../util/mushare-react-component';


class FriendList extends MuComponent {
  render() {
    var friendList = this.props.friends.map(function (friend) {
      return (
        <div className="item">
          <img className="ui avatar image" src="/image/avatar.png"/>
          <div className="content">
            <a className="header">{friend.name}</a>
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

class Friends extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
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

  componentDidMount() {
    this.loadFriends();
  }

  render() {
    return (
      <div className="friends">
        <div className="ui medium header">
          好友请求
        </div>
        <div className="ui divider"></div>
        <div className="friends-list">
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