'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Player from './player';
import '../../scss/player.scss'

class Main extends React.Component {
  render() {
    return (
      <div id="player">
        <Header/>
        <Player/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, $('#react-root')[0]);