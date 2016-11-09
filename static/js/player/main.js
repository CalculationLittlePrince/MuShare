/**
 * Created by lee on 16/11/9.
 */

require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
  },
});

require(['jquery', '../player/player'], function ($, player) {
  $(document).ready(function () {
      window.addEventListener("message", function(event){
        player.loadSongList(JSON.parse(event.data), $(''));
      }, false);
      var option = {
        audio: null,
        list: [],
        current: null,
        playpause: null,
        next: null,
        preview: null,
        cover: null,
        author: null,
        album: null
      };
      player.play(option);
      $('.btn-volume').click(function(){
        player.volume(option);
      });
    }
  );
});