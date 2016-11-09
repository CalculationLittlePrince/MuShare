/**
 * Created by lee on 16/11/9.
 */

require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
  },
});

require(['jquery', ''], function ($, player) {
  $(document).ready(function () {
      window.addEventListener("message", function(event){
        player.loadSongList(JSON.parse(event.data), $(''));
      }, false);
    }
  );
});