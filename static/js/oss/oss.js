var OSSClient = {
  client: null,
  expiration: ''
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

function checkExpiration() {
  var exp = new Date(OSSClient.expiration).getTime();
  var now = new Date().getTime();
  return exp <= now;
}

function getOssClient(token) {
  if (OSSClient.client === null || checkExpiration()) {
    return fetch('/api/oss/sts/get', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': token
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(function (data) {
        console.log(data);
        OSSClient.expiration = data.body.expiration;
        OSSClient.client = new OSS.Wrapper({
          region: 'oss-cn-hangzhou',
          accessKeyId: data.body.accessKeyId,
          accessKeySecret: data.body.accessKeySecret,
          stsToken: data.body.securityToken,
          bucket: 'mushare-store'
        });
        return OSSClient.client
      })
  } else {
    return new Promise(function (resolve, reject) {
      resolve(OSSClient.client);
    });
  }
}

function getURL(objectId, token) {
  getOssClient(token)
    .then(function (client) {
      return client.signatureUrl(objectId, {expires: 3600});
    })
    .catch(function (error) {

    });
}

export {getOssClient, getURL}
  
