/**
 * Created by lee on 16/7/16.
 */

define(['oss', '../upload/sts'], function(oss, sts){
  var uploadAvatar = function(objectKeyId, file, callbackVar, progress){
    console.log("uploadAvatar");
    return sts.getSts(callbackVar.token).then(function(client){
      if(client != null) {
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
      }
    });
  };

  var uploadAudio = function(objectKeyId, file, callbackVar, progress){
    console.log("uploadAudio");
      return sts.getSts(callbackVar.token).then(function (client) {
        if(client != null) {
          return client.multipartUpload(objectKeyId, file, {
            headers: {
              'x-oss-callback': window.btoa(JSON.stringify({
                'callbackUrl': 'test.mushare.cn/api/oss/upload/audio',
                'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
                'callbackBodyType': 'application/json'
              })),
              'x-oss-callback-var': window.btoa(JSON.stringify({
                'x:token': callbackVar.token
              }))
            },
            progress: progress
          });
        }
      });
  };

  return {
    uploadAvatar: uploadAvatar,
    uploadAudio: uploadAudio
  }
});
