var http = require('http')
  , escodegen = require('escodegen');

var options = {
  host: 'openapi.etsy.com',
  path: '/v2/?api_key=lyl88i4x6gtl8dbgcvsgq8nq'
};

callback = function(response) {
  var str = '';

  response.on('data', function(chunk) {
    str += chunk;
  });

  response.on('end', function() {
    var data = JSON.parse(str), obj = {};
    data.results.forEach(function (method) {
      if (!obj[method.type]) obj[method.type] = {};
      if (!obj[method.type]['methods']) obj[method.type]['methods'] = [];
      obj[method.type]['methods'].push(method);
    });
    obj.forEach(type) {
      console.log(escodegen.generate({
        type: 'Program',
        body: [
          {
             type: 'Function',
             id: type);
  });
}

http.request(options, callback).end();
