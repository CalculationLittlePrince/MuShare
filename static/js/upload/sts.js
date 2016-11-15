define(['jquery', 'oss'], function($, oss){
  var client = null;
  var expiration = null;
  var getSts = function(token){
    return $.ajax({
      url: '/api/oss/sts/get',
      method: 'GET',
      dataType: 'json',
      headers: {
        'Authorization': token
      }
    }).then(function(data){
      expiration = data.body.expiration;
      client = new oss.Wrapper({
        region: 'oss-cn-qingdao',
        accessKeyId: data.body.accessKeyId,
        accessKeySecret: data.body.accessKeySecret,
        stsToken: data.body.securityToken,
        bucket: 'mushare'
      });
      var dfd = $.Deferred();
      dfd.resolve(client);
      return dfd.promise();
    });
  };

  return {
    client: client,
    expiration : expiration,
    getSts: getSts
  };
});