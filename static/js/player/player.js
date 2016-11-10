/**
 *
 * Created by lee on 2016/11/9.
 */

define([], function () {
  function MPlayer(option) {
    this.songList = option.songList ? option.songList : [];
    this.audio = null;
    this.currentSong = null;
    this.listener = {};
    this.compare = option.compare;
  }

  MPlayer.prototype.setOnPlayPauseListener = function (listener) {
    this.listener.onPlayPause = listener;
  };

  MPlayer.prototype.setOnProgressListener = function (listener) {
    this.listener.onProgress = listener;
  };

  MPlayer.prototype.setOnMetaLoadedListener = function (listener) {
    this.listener.onMetaLoaded = listener;
  };

  MPlayer.prototype.setOnSongListChangeListener = function (listener) {
    this.listener.onSongListChange = listener;
  };

  MPlayer.prototype.setOnEndedListener = function (listener) {
    this.listener.onEnded = listener;
  };

  MPlayer.prototype.insertSongList = function (list) {
    var i;
    for(i = list.length - 1; i >= 0; i--) {
      this.songList.unshift(list[i]);
    }
    //play first song in list
    this.load();
    if (this.listener.onSongListChange) {
      this.listener.onSongListChange(this.songList);
    }
  };

  MPlayer.prototype.load = function (song) {
    console.log('load music');
    if (this.songList.length == 0) {
      return;
    }
    this.currentSong = song ? song : this.songList[0];
    if (this.audio && !this.audio.paused) {
      //stop current song
      this.audio.pause();
      this.audio = null;
      if(this.listener.onEnded) {
        this.listener.onEnded();
      }
    }
    this.audio = new Audio(this.currentSong.url);
    this.setAudioListener();
    this.playpause();
  };

  MPlayer.prototype.setAudioListener = function () {
    //load metadata
    var self = this;
    this.audio.onloadedmetadata = function () {
      var meta = {
        duration: timeConvert(self.audio.duration),
        cover: self.currentSong.cover,
        author: self.currentSong.author,
        album: self.currentSong.album,
        title: self.currentSong.title,
      };
      if (self.listener.onMetaLoaded) {
        self.listener.onMetaLoaded(meta);
      }
    };

    //progress
    this.audio.ontimeupdate = function () {
      if (self.listener.onProgress) {
        self.listener.onProgress({
          percent: self.audio.currentTime / self.audio.duration * 100,
          rest: timeConvert(self.audio.duration - self.audio.currentTime)
        });
      }
    };

    this.audio.onended = function() {
      if(self.listener.onEnded) {
        self.listener.onEnded();
      }
      self.next();
    };
  };

  MPlayer.prototype.playpause = function () {
    console.log('playpause');
    if (this.listener.onPlayPause) {
      this.listener.onPlayPause(this.audio.paused);
    }
    if (this.audio && !this.audio.paused) {
      console.log('pause');
      this.audio.pause();
    } else if (this.audio && this.audio.paused) {
      console.log('play');
      this.audio.play();
    }
  };

  MPlayer.prototype.next = function () {
    var nextIndex = 0;
    if (this.compare) {
      nextIndex = (this.compare(this.currentSong, this.songList) + 1) % this.songList.length;
    }
    console.log(nextIndex);
    this.load(this.songList[nextIndex]);
  };

  MPlayer.prototype.preview = function () {
    var previewIndex = 0;
    if (this.compare) {
      previewIndex = (this.compare(this.currentSong, this.songList) - 1) % this.songList.length;
    }
    if (previewIndex < 0) {
      previewIndex = this.songList.length - 1;
    }
    console.log(previewIndex);
    this.load(this.songList[previewIndex]);
  };

  MPlayer.prototype.seek = function (percent) {
    if(this.audio) {
      this.audio.currentTime = this.audio.duration * percent;
    }
  };

  MPlayer.prototype.volume = function (volume) {
    if (this.audio) {
      this.audio.volume = volume;
    }
  };

  function timeConvert(time) {
    var min;
    var sec;
    min = Math.floor(time / 60);
    min = min >= 10 ? '' + min : '0' + min;
    sec = Math.floor(time % 60);
    sec = sec >= 10 ? '' + sec : '0' + sec;
    return min + ':' + sec;
  }

  return {
    MPlayer: MPlayer
  };
});
