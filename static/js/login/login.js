/**
 * Created by lee on 16/9/25.
 */

define(['jquery'], function ($) {
  var login = function (mail, password) {
    $.ajax({
      url: '/api/user/account/login',
      method: 'post',
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      data: JSON.stringify({
        mail: mail,
        password: password
      })
    }).done(function (response) {
      console.log(response)
    }).fail(function () {

    });
  };

  return {
    login: login
  };
});