import React from 'react';


class Friends extends React.Component {
  render() {
    return (
      <div className="friends">
        <div className="ui medium header">
          好友列表
        </div>
        <div className="ui divider"></div>
        <div className="friends-list">
          <div className="ui middle aligned animated divided large list">
            <div className="item">
              <img className="ui avatar image" src="/image/avatar.png"/>
                <div className="content">
                  <a className="header">Helen</a>
                </div>
            </div>
            <div className="item">
              <img className="ui avatar image" src="/image/avatar.png"/>
                <div className="content">
                  <a className="header">Christian</a>
                </div>
            </div>
            <div className="item">
              <img className="ui avatar image" src="/image/avatar.png"/>
                <div className="content">
                  <a className="header">Daniel</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;