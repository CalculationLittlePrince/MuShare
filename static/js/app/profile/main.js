'use strict';

import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
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
      <Router>
        <div className="personal">
          <div className="ui middle">
            <div className="ui container grid">
              <div className="four wide column">
                <div className="ui secondary vertical pointing menu">
                  <NavLink to="/app/personal/profile" activeClassName="active" className="item">
                    个人信息
                  </NavLink>
                  <NavLink to="/app/personal/sheets" activeClassName="active" className="item">
                    我的歌单
                  </NavLink>
                  <NavLink to="/app/personal/subscription" activeClassName="active" className="item">
                    我的订阅
                  </NavLink>
                  <NavLink to="/app/personal/friends" activeClassName="active" className="item">
                    我的好友
                  </NavLink>
                </div>
              </div>
              <div className="twelve wide column">
                <Route exact path="/app/personal" render={props => (
                  <Redirect to="/app/personal/profile"/>
                )}/>
                <Route path="/app/personal/profile" component={Profile}/>
                <Route path="/app/personal/sheets" component={Sheets}/>
                <Route path="/app/personal/friends" component={Friends}/>
                <Route path="/app/personal/subscription" component={Subscription}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Personal;

