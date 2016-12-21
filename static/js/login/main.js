/**
 * Created by lee on 16/9/25.
 */

require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
    "semantic": "/components/semantic/dist/semantic.min"
  },

  "shim": {
    "semantic": {
      deps: [ 'jquery' ],
      exports: 'jQuery.fn.semantic'
    }
  }
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
    $('#login-submit').click(function () {
      var mail = $('#login-mail').val();
      var password = $('#login-password').val();
      login(mail, password).done(function(){
        window.location.href = $('#preview-page').val();
      }).fail(function(){
        console.log($("#login-mail, #login-password").parent(".field"))
        $("#login-mail, #login-password").parents(".field").addClass('error');
      });
    });
  });
});