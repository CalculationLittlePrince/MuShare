/**
 * Created by lee on 16/7/16.
 */

define(['oss'], function(oss){
  var uploadAvatar = function(objectKeyId, file, callbackVar, progress){
    console.log("uploadAvatar");
    return getSts(callbackVar.token).then(function(data){
      var client = new oss.Wrapper({
        region: 'oss-cn-qingdao',
        accessKeyId: data.body.accessKeyId,
        accessKeySecret: data.body.accessKeySecret,
        stsToken: data.body.securityToken,
        bucket: 'mushare'
      });
      return client.multipartUpload(objectKeyId, file, {
        headers: {
          'x-oss-callback': window.btoa(JSON.stringify({
            'callbackUrl': 'test.mushare.cn/api/oss/upload/avatar',
            'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
            'callbackBodyType': 'application/json'
          })),
          'x-oss-callback-var': window.btoa(JSON.stringify({
            'x:token': callbackVar.token
          }))
        },
        progress: progress
      });
    });
  };

  var uploadAudio = function(){
    console.log("uploadAudio");
  };

  var getSts = function(token){
    return $.ajax({
      url: '/api/oss/sts/get',
      method: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': token
      }
    });
  };

  return {
    uploadAvatar: uploadAvatar,
    uploadAudio: uploadAudio
  }
});
