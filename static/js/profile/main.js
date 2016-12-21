require.config({
  "baseUrl": "js/lib",
  "paths": {
    "jquery": "https://code.jquery.com/jquery-3.1.0.min",
    "oss": "http://gosspublic.alicdn.com/aliyun-oss-sdk-4.4.0.min"
  },
});


require(['jquery', '../upload/upload'], function($, upload){
  $(document).ready(function(){
    var token = $('#token').val();
    document.getElementById('avatar').addEventListener('change', function (e) {
      upload.uploadAvatar('test.jpg', e.target.files[0], {
        token: token
      }, function*(p){
        console.log(p);
      }).then(function(result) {
        console.log(result);
      }).catch(function(err){
        console.log(err);
      });
    });
    document.getElementById('audio').addEventListener('change', function(e) {
      upload.uploadAudio();
    });
  });
});