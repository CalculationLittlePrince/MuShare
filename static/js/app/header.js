import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/app.scss'
import logo from '../../image/logo.png';

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <div className="ui grid container">
          <div className="six wide column">
            <div className="ui segment">
              <div className="ui secondary menu">
                <div className="item">
                  <i className="home icon big link"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="four wide column">
            <div className="ui center aligned segment">
              <div className="ui secondary menu">
                <div className="item">
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
                  <div className="item">
                    <i className="user icon large link"></i>
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
            <div className="item">
                本周热门
            </div>
            <div className="item">
                木屑推荐
            </div>
            <div className="item">
                最新原创
            </div>
            <div className="item">
                音乐社区
            </div>
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