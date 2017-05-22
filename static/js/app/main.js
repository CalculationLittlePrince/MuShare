'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Hot from './hot';
import Recommend from './recommends';
import Original from './original';
import Community from './community/main';
import Personal from './profile/main';
import SheetPage from './sheet/main'
import Chat from './chat/main';
import '../../scss/app.scss';
import '../../semantic/dist/semantic.min.js';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $('.ui.sidebar.chat')
    //   .sidebar('setting', 'transition', 'overlay')
    //   .sidebar('toggle');
  }

  render() {
    return (
      <Router basename="/app">
        <div id="app">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/hot" component={Hot}/>
          <Route path="/original" component={Original}/>
          <Route path="/recommend" component={Recommend}/>
          <Route path="/community" component={Community}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/sheet/:sheetId" component={SheetPage}/>
          <Footer/>
          <Chat/>
        </div>
      </Router>
    );
  }

}
ReactDOM.render(<App/>, $('#react-root')[0]);
