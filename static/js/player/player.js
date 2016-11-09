/**
 *
 * Created by lee on 2016/11/9.
 */

define([], function(){
  var loadSongList = function(list,player){
    if(!player.list) {
      player.list = [];
    }
    player.list.unshift(list);
  };

  var play = function(player) {
    console.log('play music');
    var song = player.current ? player.current : player.list[0];
    var audio = new Audio('http://kolber.github.io/audiojs/demos/mp3/juicy.mp3');
    audio.play();
    player.audio = audio;
    audio.ontimeupdate = function() {
      console.log(audio.currentTime);
    };
  };

  var puase = function(player) {

  };

  var next = function(player) {

  };

  var preview = function(player) {

  };

  var volume = function(player) {
    if(player.audio) {
      player.audio.volume  = 0.5;
    }
  }

  return {
    play: play,
    volume: volume,
    loadSongList: loadSongList
  };
});
