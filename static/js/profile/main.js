require.config({
  "baseUrl": "js/lib",

  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
    "oss": "http://gosspublic.alicdn.com/aliyun-oss-sdk-4.4.0.min"
  },
});


require(['jquery', '../upload/upload'], function($, upload){
  $(document).ready(function(){
    document.getElementById('file').addEventListener('change', function (e) {
      upload.uploadAvatar('test.jpg', e.target.files[0], {
        token: $('#token').val()
      }, function*(p){
        console.log(p);
      }).then(function(result) {
        console.log(result);
      }).catch(function(err){
        console.log(err);
      });
    });
  });
});