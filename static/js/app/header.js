import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../image/logo.png';
import '../../semantic/dist/semantic.min.js';

class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.ui .dropdown').dropdown({
      action: 'hide'
    });
  }

  render() {
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
                  <div className="icon-user item">
                    <div className="ui floating top right pointing dropdown">
                      <img className="ui avatar image"
                           src="/image/avatar.png"/>
                      <i className="dropdown icon"></i>
                      <div className="menu">
                        <div className="item">个人主页</div>
                        <Link to="/personal" className="item">个人中心</Link>
                        <div className="divider"></div>
                        <div className="item">设置</div>
                        <div className="item">注销</div>
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
            <NavLink to="/community" activeClassName="active" className="item">
              音乐社区
            </NavLink>
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