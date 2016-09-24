define(['jquery'], function($){
  var getSts = function(){
    return $.ajax({
      url: '/api/oss/sts/get',
      method: 'GET',
      dataType: 'json'
    });
  };

  return {
    getSts: getSts
  };
});