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
          region: 'oss-ap-northeast-1',
          accessKeyId: data.body.accessKeyId,
          accessKeySecret: data.body.accessKeySecret,
          stsToken: data.body.securityToken,
          bucket: 'mushare-jp'
        });
        return OSSClient.client
      })
  } else {
    return new Promise(function (resolve, reject) {
      resolve(OSSClient.client);
    });
  }
}

function getURL(objectId) {
  // return 'http://mushare-store.oss-cn-hangzhou.aliyuncs.com/' + objectId;
  return 'http://mushare-jp.oss-ap-northeast-1.aliyuncs.com/' + objectId;
}

export {getOssClient, getURL}
  
