var http = require('http');

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
    console.log(str);
  });
}

http.request(options, callback).end();
