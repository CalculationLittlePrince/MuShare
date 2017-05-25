var OSSClient = {
  client: null,
  expiration: ''
}

function checkExpiration() {
  return true;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function getSts(token) {
  fetch('/api/oss/sts/get', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Authorization': token
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(function (data) {
      OSSClient.expiration = data.body.expiration;
      OSSClient.client = new oss.Wrapper({
        region: 'oss-cn-hangzhou',
        accessKeyId: data.body.accessKeyId,
        accessKeySecret: data.body.accessKeySecret,
        stsToken: data.body.securityToken,
        bucket: 'mushare-store'
      });
      return OSSClient.client
    })
    .catch(function (error) {
      throw error;
    });
}


function uploadAvatar(objectKeyId, file, callbackVar, progress) {
  if (checkExpiration() || OSSClient.client == null) {
    getSts(callbackVar.token)
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
      .catch(function (error) {
        console.error(error);
      })
  } else {
  }
}

function uploadAudio(objectKeyId, file, callbackVar, progress) {
  if (checkExpiration() || OSSClient.client == null) {
    getSts(callbackVar.token)
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
      .catch(function (error) {
        console.error(error);
      })
  } else {
  }
}

export {uploadAvatar, uploadAudio};
