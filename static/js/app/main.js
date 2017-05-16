'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Hot from './hot';
import '../../scss/app.scss'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename="">
        <div id="app">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/hot" component={Hot}/>
          <Footer/>
        </div>
      </Router>
    );
  }

}
ReactDOM.render(<App/>, $('#react-root')[0]);
