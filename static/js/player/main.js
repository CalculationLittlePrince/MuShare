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
        author: 'Lee1',
        album: 'zhao zi ji'
      }, {
        mid: 2,
        url: 'http://kolber.github.io/audiojs/demos/mp3/juicy.mp3',
        title: 'song2',
        author: 'Lee yifan',
        album: 'zhao'
      }, {
        mid: 3,
        url: 'http://kolber.github.io/audiojs/demos/mp3/juicy.mp3',
        title: 'song3',
        author: 'fan yi lee',
        album: 'zhao zi '
      }];
      var mplayer = new M.MPlayer(option);
      //set listener
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
        songListEle.find('.song').remove();
        $('.pl-container-inner .title .title-index').text('0/' + songList.length);
        for (i = 0; i < songList.length; i++) {
          var jqobj = $('<div class="song" mid="' + songList[i].mid + '">' +
            '<div class="song-title column large-6">' +
            songList[i].title +
            '</div>' +
            '<div class="song-author column large-4">' +
            songList[i].author +
            '</div>' +
            '<div class="song-option column large-2">' +
            '<span class="share icon ion-share"></span>' +
            '<span class="close icon ion-close"></span>' +
            '</div>' +
            '</div>');
          songListEle.append(jqobj);
        }
      });
      mplayer.setOnSongRemoveListener(function (currentSong, songList) {
        var songs = $('.pl-container-inner .song-list .song');
        var index = 0;
        songs.each(function () {
          if ($(this).attr('mid') == currentSong.mid) {
            $(this).addClass('playing');
            index = songs.index($(this)) + 1;
          } else {
            $(this).removeClass('playing');
          }
        });
        $('.pl-container-inner .title .title-index').text(index + '/' + songList.length);
      });
      mplayer.setOnSongLoadListener(function (song) {
        var songs = $('.pl-container-inner .song-list .song');
        if (!song) {
          return;
        }
        var index = 0;
        songs.each(function () {
          if ($(this).attr('mid') == song.mid) {
            console.log('playing');
            $(this).addClass('playing');
            index = songs.index($(this)) + 1;
            console.log(index);
          } else {
            $(this).removeClass('playing');
          }
        });
        var text = $('.pl-container-inner .title .title-index').text();
        text = index + '/' + text.split('/')[1];
        console.log(text);
        $('.pl-container-inner .title .title-index').text(text);
      });
      mplayer.setOnEndedListener(function () {
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
        var start = $(this).offset().left;
        var percent = (e.pageX - start) / $(this).width();
        mplayer.seek(percent);
      });
      $('.pl-container-inner .song-list .song').click(function () {
        var mid = parseInt($(this).attr('mid'));
        mplayer.load(mid);
      });
      //remove current song from list
      $('.pl-container-inner .song-list .song .close').click(function (e) {
        console.log('close');
        var mid = $(this).parent().parent().attr('mid');
        console.log(mid);
        $(this).parent().parent().fadeOut();
        $(this).parent().parent().remove();
        mplayer.removeSong(mid);
        e.stopPropagation();
      });
      //share
      $('.pl-container-inner .song-list .song .share').click(function (e) {
        console.log('share');
        e.stopPropagation();
      });
    }
  );
});