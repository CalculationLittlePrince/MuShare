/**
 *
 * Created by lee on 16/7/20.
 */

require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
    "slick": "//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min"
  },

  "shim": {
    "slick": {
      deps: [ 'jquery' ],
      exports: 'jQuery.fn.slick'
    }
  }
});


require(['jquery', 'slick'], function($){
  $(document).ready(function(){
    $('.img-carousel').slick({
      arrows: false,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  });
});
