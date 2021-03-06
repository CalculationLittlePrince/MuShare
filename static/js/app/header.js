import React from 'react';
import MuComponent from '../util/mushare-react-component';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../image/logo.png';
import {getURL} from '../oss/oss'
import '../../semantic/dist/semantic.min.js';

class Top extends MuComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '/image/avatar.png',
      userId: -1
    }
    this.loadUserProfile = this.loadUserProfile.bind(this);
    this.loadUserAvatar = this.loadUserAvatar.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    var self = this;
    $('.ui .dropdown').dropdown({
      action: 'hide'
    });
    this.loadUserProfile();
    setInterval(function () {
      self.loadUserProfile();
    }, 5000);
  }

  loadUserProfile() {
    var self = this;
    var token = $('#token').val();
    fetch('/api/user/profile/get', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      },
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (data) {
        self.setState({
          avatar: data.body.avatar === '' ? '/image/avatar.png' : getURL(data.body.avatar),
          userId: data.body.id
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  loadUserAvatar(objectId) {
    var self = this;
    if (objectId != '') {
      self.setState({
        avatar: getURL(objectId)
      });
    }
  }

  logOut() {
    var self = this;
    fetch('/api/user/account/logout', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    var userPage = null;
    if (this.state.userId == -1) {
      userPage = (
        <div className="item">个人主页</div>
      );
    } else {
      userPage = (
        <Link to={`/user/${this.state.userId}`} className="item">个人主页</Link>
      );
    }

    return (
      <div className="header-top">
        <div className="ui grid container">
          <div className="six wide column">
            <div className="ui segment">
              <div className="ui secondary menu">
                <div className="icon-home item">
                  <Link to="/"><i className="home icon big link"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui center aligned segment">
              <div className="ui secondary menu">
                <div className="item logo">
                  <div className="image">
                    <img src={logo}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <div className="ui segment">
              <div className="ui secondary menu">
                <div className="right menu">
                  <div className="item">
                    <div className="ui icon input">
                      <input type="text" placeholder="Search..."/>
                      <i className="search link icon"></i>
                    </div>
                  </div>
                  <div className="icon-user item">
                    <div className="ui floating top right pointing dropdown">
                      <img className="ui avatar image"
                           src={this.state.avatar}/>
                      <i className="dropdown icon"></i>
                      <div className="menu">
                        {userPage}
                        <Link to="/personal/profile"
                              className="item">个人中心</Link>
                        <div className="divider"></div>
                        <div className="item">设置</div>
                        <div className="item" onClick={this.logOut}>注销</div>
                      </div>
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

class Divider extends React.Component {
  render() {
    return (
      <div className="ui divider">

      </div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="ui container">
          <div className="ui four item menu">
            <NavLink to="/hot" activeClassName="active" className="item">
              本周热门
            </NavLink>
            <NavLink to="/recommend" activeClassName="active" className="item">
              木屑推荐
            </NavLink>
            <NavLink to="/original" activeClassName="active" className="item">
              最新原创
            </NavLink>
            <a className="item">
              音乐社区
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Top
        />
        <Divider
        />
        <Navigation
        />
      </div>
    );
  }
}

export default Header;