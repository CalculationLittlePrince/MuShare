'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../../scss/index.scss'
import '../../semantic/dist/semantic.min.js';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: '100%'
    };
  }

  componentDidMount() {
    this.setState({
      height: ($(window).height() - 10) + 'px'
    });
  }

  render() {

    var videoStyle = {
      height: this.state.height
    }

    return (
      <div id="index">
        <div className="video-bg">
          <Header/>
          <video className="video-elem" style={videoStyle} preload="none" autoPlay="true" loop="loop"
                 muted="muted">
            <source
              src="http://mushare-jp.oss-ap-northeast-1.aliyuncs.com/A_plate_playing_the_rhythm_of_the_music.mp4"
              type="video/mp4"/>
            Video not supported
          </video>
          <div className="video-overlay">
            <div className="text">
              <h1>MuShare</h1>
              <h1>分.享</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
ReactDOM.render(<Index/>, $('#react-root')[0]);