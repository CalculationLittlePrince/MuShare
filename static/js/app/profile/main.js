'use strict';

import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Profile from './profile';
import Sheets from './sheets';
import Friends from './friends';
import Subscription from './subscription';

class Personal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="personal">
          <div className="ui middle">
            <div className="ui container grid">
              <div className="four wide column">
                <div className="ui secondary vertical pointing menu">
                  <NavLink to="/personal/profile" activeClassName="active" className="item">
                    个人信息
                  </NavLink>
                  <NavLink to="/personal/sheets" activeClassName="active" className="item">
                    我的歌单
                  </NavLink>
                  <NavLink to="/personal/subscription" activeClassName="active" className="item">
                    我的订阅
                  </NavLink>
                  <NavLink to="/personal/friends" activeClassName="active" className="item">
                    我的好友
                  </NavLink>
                </div>
              </div>
              <div className="twelve wide column">
                <Route path={`${this.props.match.path}/profile`} component={Profile}/>
                <Route path={`${this.props.match.path}/sheets`} component={Sheets}/>
                <Route path={`${this.props.match.path}/subscription`} component={Subscription}/>
                <Route path={`${this.props.match.path}/friends`} component={Friends}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Personal;

