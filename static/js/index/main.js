'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../../scss/index.scss'
import '../../semantic/dist/semantic.min.js';

class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="index">
        <Header/>
      </div>
    );
  }

}
ReactDOM.render(<Index/>, $('#react-root')[0]);