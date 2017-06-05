'use strict';

import React from 'react';
import logo from '../../image/logo.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;