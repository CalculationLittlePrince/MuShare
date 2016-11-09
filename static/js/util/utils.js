define(['jquery'], function($){
  var openPlayer = function(list){
    var player = window.open('/player', 'mushare-player');
    player.postMessage(JSON.stringify(list));
  };

  return {
    openPlayer: openPlayer
  }
});