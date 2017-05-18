// var $ = require('jquery');
// require('../vendor/bootstrap');
// $(document).ready(function ($) {
//   $(".scroll").click(function (event) {
//     event.preventDefault();
//     $('html,body').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000);
//   });
// });
//
// require('../vendor/jarallax');
// require('../vendor/SmoothScroll.min');
//
// $('.jarallax').jarallax({
//   speed: 0.3,
//   imgWidth: 1366,
//   imgHeight: 768
// })
//
// require('../vendor/responsiveslides.min');
// require('../vendor/move-top');
// require('../vendor/easing');
//
// $(document).ready(function () {
//   /*
//    var defaults = {
//    containerID: 'toTop', // fading element id
//    containerHoverID: 'toTopHover', // fading element hover id
//    scrollSpeed: 1200,
//    easingType: 'linear'
//    };
//    */
//
//   $().UItoTop({
//     easingType: 'easeOutQuart'
//   });
//
// });

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../../scss/index.scss'
import '../../semantic/dist/semantic.min.js';

class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="index">
        <Header/>
      </div>
    );
  }

}
ReactDOM.render(<Index/>, $('#react-root')[0]);