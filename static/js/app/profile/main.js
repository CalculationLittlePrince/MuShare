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
      <Router basename="/app/personal">
        <div className="personal">
          <div className="ui middle">
            <div className="ui container grid">
              <div className="four wide column">
                <div className="ui secondary vertical pointing menu">
                  <NavLink to="/profile" activeClassName="active" className="item">
                    个人信息
                  </NavLink>
                  <NavLink to="/sheets" activeClassName="active" className="item">
                    我的歌单
                  </NavLink>
                  <NavLink to="/subscription" activeClassName="active" className="item">
                    我的订阅
                  </NavLink>
                  <NavLink to="/friends" activeClassName="active" className="item">
                    我的好友
                  </NavLink>
                </div>
              </div>
              <div className="twelve wide column">
                <Route exact path="/" render={props => (
                  <Redirect to="/profile"/>
                )}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/sheets" component={Sheets}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/subscription" component={Subscription}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Personal;

