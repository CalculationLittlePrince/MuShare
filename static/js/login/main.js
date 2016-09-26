/**
 * Created by lee on 16/9/25.
 */

require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
  },
});

require(['jquery'], function ($) {
  var login = function (mail, password) {
    return $.ajax({
      url: '/api/user/account/login',
      method: 'post',
      dataType: 'json',
      data: JSON.stringify({
        mail: mail,
        password: password
      })
    });
  };

  $(document).ready(function () {
    $('.form .login').click(function () {
      console.log('login');
      var mail = $('.form .mail').val();
      var password = $('.form .password').val();
      login(mail, password).done(function(){
        console.log($('#preview-page').val());
        window.location.href = $('#preview-page').val();
      }).fail(function(){
        alert('Login Failed')
      });
    });
  });
});