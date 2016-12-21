
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

require(['jquery', '../util/utils'], function ($, utils) {
    var register = function (mail, name, password) {

        return $.post("/api/user/account/register", {

        });
    };

    $(document).ready(function () {
        $('#register-submit').click(function () {
            var name = $("#register-name").val();
            var password = $("#register-password").val();
            var mail = $("#register-mail").val();
            var validate = true;
            if (name == null || name == "") {
                validate = false;
                $("#register-name").parents(".field").addClass("error");
            } else {
                $("#register-name").parents(".field").removeClass("error");
            }
            if (password == null || password == "") {
                validate = false;
                $("#register-password").parents(".field").addClass("error");
            } else {
                $("#register-password").parents(".field").removeClass("error");
            }
            if (mail == null || mail == "" || !utils.emailValidate(mail)) {
                validate = false;
                $("#register-mail").parents(".field").addClass("error");
            } else {
                $("#register-mail").parents(".field").removeClass("error");
            }
        });
    });
});