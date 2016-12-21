define(['jquery'], function($){
  var openPlayer = function(list) {
    var player = window.open('/player', 'mushare-player');
    player.postMessage(JSON.stringify(list));
  };

  var redirectTo = function(url) {
    window.location = url;
  };

  return {
    redirectTo: redirectTo,
    openPlayer: openPlayer
  }
});