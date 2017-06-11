import React from 'react';
import MuComponent from '../util/mushare-react-component';
import {getURL} from '../oss/oss';

class AudioList extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      audioList: [],
      current: null,
    };
    this.receiveAudioList = this.receiveAudioList.bind(this);
    this.deleteAudioFromList = this.deleteAudioFromList.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.play = this.play.bind(this);
    this.props.eventEmitter.addListener('audio-list-receive-audiolist', this.receiveAudioList);
    this.props.eventEmitter.addListener('audio-list-next', this.next);
    this.props.eventEmitter.addListener('audio-list-previous', this.previous);
  }

  receiveAudioList(audioList) {
    console.log(audioList);
    audioList = audioList.concat(this.state.audioList);
    this.setState({
      audioList: audioList,
      current: audioList[0]
    });
    this.props.eventEmitter.emit('audio-controller-load-audio', audioList[0]);
    this.props.eventEmitter.emit('audio-info-receive-audio', audioList[0]);
  }


  play(audio) {
    console.log(audio);
    this.setState({
      current: audio,
    });
    this.props.eventEmitter.emit('audio-controller-load-audio', audio);
    this.props.eventEmitter.emit('audio-info-receive-audio', audio);
  }

  previous() {
    var index = -1;
    for (let i in this.state.audioList) {
      if (this.state.audioList[i].id === this.state.current.id) {
        index = parseInt(i);
        break;
      }
    }
    var audio = this.state.audioList[(index - 1) === -1 ? (this.state.audioList.length - 1) : (index - 1)];
    this.setState({
      current: audio
    });
    this.props.eventEmitter.emit('audio-controller-load-audio', audio);
    this.props.eventEmitter.emit('audio-info-receive-audio', audio);
  }

  next() {
    var index = -1;
    for (let i in this.state.audioList) {
      if (this.state.audioList[i].id === this.state.current.id) {
        index = parseInt(i);
        break;
      }
    }
    var audio = this.state.audioList[(index+1) % this.state.audioList.length];
    this.setState({
      current: audio
    });
    this.props.eventEmitter.emit('audio-controller-load-audio', audio);
    this.props.eventEmitter.emit('audio-info-receive-audio', audio);
  }

  deleteAudioFromList(audioId, index) {
    var self = this;
    var token = $('#token').val();
    fetch('/api/user/player/delete', {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      },
      body: JSON.stringify({
        audioId: audioId
      })
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function () {
        console.log("delete from play list");
        if (audioId === self.state.current.id) {
          self.next();
        }
        var audioList = self.state.audioList;
        audioList.splice(index, 1);
        self.setState({
          audioList: audioList
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  componentDidMount() {
    var self = this;
    var token = $('#token').val();
    fetch('/api/user/player/list', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      }
    })
      .then(self.checkStatus)
      .then(self.parseJSON)
      .then(function (result) {
        var audioList = result.body.map(function (audio) {
          return {
            id: audio.id,
            name: audio.name,
            audioUrl: audio.audioUrl,
            artist: audio.artist.name,
            duration: audio.duration,
            sheet: audio.sheet.name,
            cover: audio.sheet.cover
          };
        });
        self.receiveAudioList(audioList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var self = this;
    var al = this.state.audioList.map(function (audio, index) {
      if (audio.id === self.state.current.id) {
        return (
          <div className="item active">
            <div className="ui grid">
              <div className="one wide column">{index + 1}.</div>
              <div className="seven wide column">
                {audio.name}
              </div>
              <div className="four wide column">{audio.artist}</div>
              <div className="four wide column">
                <i className="remove icon"
                   onClick={() => self.deleteAudioFromList(audio.id, index)}></i>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="item" onClick={() => self.play(audio)}>
          <div className="ui grid">
            <div className="one wide column">{index + 1}.</div>
            <div className="seven wide column">
              {audio.name}
            </div>
            <div className="four wide column">{audio.artist}</div>
            <div className="four wide column">
              <i className="remove icon"
                 onClick={() => self.deleteAudioFromList(audio.id, index)}></i>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="audio-list">
        <div className="title">
          <span>音乐列表</span>
          <span className="title-index"></span>
        </div>
        <div className="ui divider"></div>
        <div className="ui middle aligned divided list">
          {al}
        </div>
      </div>
    );
  }
}

class AudioInfo extends MuComponent {

  constructor(props) {
    super(props);
    this.state = {
      audio: {
        cover: '',
        name: '',
        artist: '',
        sheet: ''
      }
    };
    this.receiveAudioInfo = this.receiveAudioInfo.bind(this);
    this.props.eventEmitter.addListener('audio-info-receive-audio', this.receiveAudioInfo);
  }

  receiveAudioInfo(audio) {
    this.setState({
      audio: audio
    });
  }

  render() {
    return (
      <div className="audio-info">
        <div className="ui segment cover">
          <div className="ui centered medium rounded">
            <img
              src={this.state.audio.cover === '' ? '/image/avatar.png' : getURL(this.state.audio.cover)}
              alt=""/>
          </div>
          <div className="name">
            {this.state.audio.name}
          </div>
          <div className="artist">
            {this.state.audio.artist}
          </div>
          <div className="sheet">
            {this.state.audio.sheet}
          </div>
        </div>
      </div>
    );
  }
}

class AudioController extends MuComponent {

  constructor(props) {
    super(props);
    this.audioObj = null;
    this.state = {
      name: '',
      time: 0,
      play: false,
      playProgress: 0,
      loadProgress: 0,
    }
    this.loadAudio = this.loadAudio.bind(this);
    this.playpause = this.playpause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.seek = this.seek.bind(this);
    this.volume = this.volume.bind(this);
    this.changePlayMode = this.changePlayMode.bind(this);
    this.timeConvert = this.timeConvert.bind(this);
    this.props.eventEmitter.addListener('audio-controller-load-audio', this.loadAudio);
  }

  loadAudio(audio) {
    var self = this;
    if (this.audioObj !== null && !this.audioObj.paused) {
      this.audioObj.pause();
      this.audioObj = null;
    }
    this.setState({
      name: audio.name,
      time: audio.duration,
      playProgress: 0,
      loadProgress: 0
    });
    this.audioObj = new Audio(getURL(audio.audioUrl));
    this.audioObj.onerror = function () {
      alert('cant play file');
    }
    this.audioObj.onprogress = function () {
      var load = self.audioObj.buffered.end(0) / self.audioObj.duration * 100;
      self.setState({
        loadProgress: load,
      });
    }
    this.audioObj.ontimeupdate = function () {
      self.setState({
        loadProgress: self.audioObj.buffered.end(0) / self.audioObj.duration * 100,
        time: self.audioObj.duration - self.audioObj.currentTime,
        playProgress: self.audioObj.currentTime / self.audioObj.duration * 100
      });
    }
    this.playpause();
  }

  playpause() {
    if (this.audioObj === null) {
      alert('cant play audio');
    }
    if (!this.audioObj.paused) {
      this.audioObj.pause();
      this.setState({
        play: false,
      });
    } else {
      this.audioObj.play();
      this.setState({
        play: true,
      })
    }
  }

  next() {
    this.props.eventEmitter.emit('audio-list-next');
  }

  previous() {
    this.props.eventEmitter.emit('audio-list-previous');
  }

  seek() {

  }

  volume() {

  }

  changePlayMode() {
    this.props.eventEmitter.emit('audio-list-play-mode');
  }

  timeConvert(time) {
    var min;
    var sec;
    min = Math.floor(time / 60);
    min = min >= 10 ? '' + min : '0' + min;
    sec = Math.floor(time % 60);
    sec = sec >= 10 ? '' + sec : '0' + sec;
    return min + ':' + sec;
  }

  render() {
    var playpause = null;
    if (this.state.play) {
      playpause = (
        <i className="pause icon"
           onClick={this.playpause}></i>
      );
    } else {
      playpause = (
        <i className="play icon"
           onClick={this.playpause}></i>
      );
    }

    var sliderProgressStyle = {
      left: this.state.playProgress + '%'
    }

    var playProgressStyle = {
      width: this.state.playProgress + '%'
    }

    var loadProgressStyle = {
      width: this.state.loadProgress + '%'
    }

    return (
      <div className="audio-controller">
        <div className="ui grid">
          <div className="mod1 eight wide column">
            <div className="hd ui items">
              <div className="item">
                <div className="middle aligned content">
                  <div className="song-title">
                    {this.state.name}
                  </div>
                  <div className="ui right floated time">
                    <span>-</span>
                    <span
                      className="rest">{this.timeConvert(this.state.time)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bd">
              <div className="ui progress">
                <div className="progress-slider" style={sliderProgressStyle}>
                </div>
                <div className="progress-loaded"
                     style={loadProgressStyle}></div>
                <div className="progress-player"
                     style={playProgressStyle}></div>
              </div>
            </div>
          </div>
          <div className="mod2 three wide column ">
            <div className="ui grid">
              <div className="six wide column">
                <div className="btn-mode">
                  <i className="random icon"></i>
                </div>
              </div>
              <div className="ten wide column">
                <div className="ui grid">
                  <div className="six wide column">
                    <div className="btn-volume">
                      <i className="volume up icon"></i>
                    </div>
                  </div>
                  <div className="ten wide column">
                    <div className="volume-progress">
                      <div className="current"></div>
                      <div className="slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mod3 five wide column">
            <div className="ui grid">
              <div className="four wide column">
                <div className="btn-preview">
                  <i className="step backward icon"
                     onClick={this.previous}></i>
                </div>
              </div>
              <div className="four wide column">
                <div className="btn-playpause">
                  {playpause}
                </div>
              </div>
              <div className="four wide column">
                <div className="btn-next">
                  <i className="step forward icon"
                     onClick={this.next}></i>
                </div>
              </div>
              <div className="four wide column"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Player extends MuComponent {

  constructor(props) {
    super(props);
    this.eventEmitter = new EventEmitter();
  }

  componentDidMount() {
    var self = this;
    window.addEventListener("message", function (event) {
      event.source
      self.eventEmitter.emit('audio-list-receive-audiolist', JSON.parse(event.data));
    }, false);
  }

  render() {
    return (
      <div className="player">
        <div className="middle">
          <div className="ui container">
            <div className="ui grid">
              <div className="eleven wide column">
                <AudioList
                  eventEmitter={this.eventEmitter}/>
              </div>
              <div className="five wide column">
                <AudioInfo
                  eventEmitter={this.eventEmitter}/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="ui container">
            <AudioController
              eventEmitter={this.eventEmitter}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

