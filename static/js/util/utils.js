define(['jquery'], function($){
  var openPlayer = function(list) {
    var player = window.open('/player', 'mushare-player');
    player.postMessage(JSON.stringify(list));
  };

  var redirectTo = function(url) {
    window.location = url;
  };

  var emailValidate = function(email) {
    var patten = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    return patten.test(email);
  }

  return {
    redirectTo: redirectTo,
    openPlayer: openPlayer,
    emailValidate: emailValidate
  }
});