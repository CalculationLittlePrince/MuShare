var $ = require('jquery');
require('../vendor/bootstrap');
$(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
});

require('../vendor/jarallax');
require('../vendor/SmoothScroll.min');

$('.jarallax').jarallax({
  speed: 0.3,
  imgWidth: 1366,
  imgHeight: 768
})

require('../vendor/responsiveslides.min');
require('../vendor/move-top');
require('../vendor/easing');

$(document).ready(function () {
  /*
   var defaults = {
   containerID: 'toTop', // fading element id
   containerHoverID: 'toTopHover', // fading element hover id
   scrollSpeed: 1200,
   easingType: 'linear'
   };
   */

  $().UItoTop({
    easingType: 'easeOutQuart'
  });

});