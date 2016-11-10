/**
 * Created by lee on 16/11/9.
 */

require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
  },
});

require(['jquery', '../player/player'], function ($, M) {
  $(document).ready(function () {
      var option = {
        compare: function (currentSong, list) {
          var i;
          for (i = 0; i < list.length; i++) {
            if (list[i].mid == currentSong.mid) {
              return i;
            }
          }
        }
      };
      var songList = [{
        mid: 1,
        url: 'http://kolber.github.io/audiojs/demos/mp3/juicy.mp3',
        title: 'song1',
        author: 'Lee Band',
        album: 'zhao zi ji'
      }, {
        mid: 2,
        url: 'http://kolber.github.io/audiojs/demos/mp3/juicy.mp3',
        title: 'song2',
        author: 'Lee Band',
        album: 'zhao zi ji'
      }, {
        mid: 3,
        url: 'http://kolber.github.io/audiojs/demos/mp3/juicy.mp3',
        title: 'song3',
        author: 'Lee Band',
        album: 'zhao zi ji'
      }];
      var mplayer = new M.MPlayer(option);
      mplayer.setOnMetaLoadedListener(function (meta) {
        $('.pl-container-inner .right-container .author').text(meta.author);
        $('.pl-container-inner .right-container .album').text(meta.album);
        $('.pl-control .time .rest').text(meta.duration);
        $('.pl-control .song-title').text(meta.title);
      });
      mplayer.setOnPlayPauseListener(function (paused) {
        var playpauseEle = $('.pl-control .btn-playpause');
        if (paused) {
          //play
          if (playpauseEle.hasClass('ion-play')) {
            playpauseEle.removeClass('ion-play');
          }
          if (!playpauseEle.hasClass('ion-pause')) {
            playpauseEle.addClass('ion-pause');
          }
        }
        else {
          //pause
          if (playpauseEle.hasClass('ion-pause')) {
            playpauseEle.removeClass('ion-pause');
          }
          if (!playpauseEle.hasClass('ion-play')) {
            playpauseEle.addClass('ion-play');
          }
        }
      });
      mplayer.setOnProgressListener(function (progress) {
        $('.pl-control .time .rest').text(progress.rest);
        $('.pl-control .progress .progress-player').width(progress.percent + '%');
      });
      mplayer.setOnSongListChangeListener(function (songList) {
        var i;
        var songListEle = $('.pl-container-inner .song-list');
        songListEle.find('.item').remove();
        for (i = 0; i < songList.length; i++) {
          var jqobj = $('<div class="item">' +
            songList[i].title +
            '</div>');
          songListEle.append(jqobj);
        }
      });
      mplayer.setOnEndedListener(function (){
        $('.pl-control .progress .progress-player').width('0%');
      });

      mplayer.insertSongList(songList);

      //DOM event
      window.addEventListener("message", function (event) {
        mplayer.insertSongList(JSON.parse(event.data));
      }, false);
      $('.pl-control .btn-playpause').click(function () {
        mplayer.playpause();
      });
      $('.pl-control .btn-next').click(function () {
        mplayer.next();
      });
      $('.pl-control .btn-preview').click(function () {
        mplayer.preview();
      });
      $('.pl-control .progress').click(function (e) {
        var start = $(this).offset().left, end = $(this).offset().right;
        var percent = (e.pageX - start) / $(this).width();
        mplayer.seek(percent);
      });
    }
  );
});