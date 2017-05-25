'use strict';

import React from 'react';
import logo from '../../image/logo.png';
import Login from './login';
import Register from './register';
import '../../semantic/dist/semantic.min.js';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
  }

  showRegister() {
    $('.ui.modal.register')
      .modal({
        observeChanges: true
      })
      .modal('show');
  }

  showLogin() {
    $('.ui.modal.login')
      .modal({
        observeChanges: true
      })
      .modal('show');
  }

  render() {
    return (
      <div className="header">
        <Login/>
        <Register/>
        <div className="header-top">
          <div className="ui grid container">
            <div className="six wide column">
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
                      <div className="ui primary button"
                           onClick={this.showRegister}>Sign up
                      </div>
                    </div>
                    <div className="item">
                      <div className="ui button" onClick={this.showLogin}>
                        Login
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

export default Header;