import getOssClient from './oss';

function uploadAvatar(objectKeyId, file, callbackVar, progress) {
  return getOssClient(callbackVar.token)
    .then(function (client) {
      return client.multipartUpload(objectKeyId, file, {
        headers: {
          'x-oss-callback': window.btoa(JSON.stringify({
            'callbackUrl': 'music.mushare.cn/api/oss/upload/avatar',
            'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
            'callbackBodyType': 'application/json'
          })),
          'x-oss-callback-var': window.btoa(JSON.stringify({
            'x:token': callbackVar.token
          }))
        },
        progress: progress
      });
    })
}

function uploadAudio(objectKeyId, file, callbackVar, progress) {
  return getOssClient(callbackVar.token)
    .then(function (client) {
      return client.multipartUpload(objectKeyId, file, {
        headers: {
          'x-oss-callback': window.btoa(JSON.stringify({
            'callbackUrl': 'music.mushare.cn/api/oss/upload/audio',
            'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
            'callbackBodyType': 'application/json'
          })),
          'x-oss-callback-var': window.btoa(JSON.stringify({
            'x:token': callbackVar.token
          }))
        },
        progress: progress
      });
    })
}

export {uploadAvatar, uploadAudio};
