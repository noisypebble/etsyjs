var request = require('request')
  , cheerio = require('cheerio');

var base = 'https://www.etsy.com';
var ref = '/developers/documentation/#reference';

request(base + ref, function (err, res, html) {
  if (err) return console.error(err);
  var phtml = cheerio.load(html);
  var rescs = [];
  phtml('div#reference ul li a').each(function() {
    var $ = cheerio(this);
    request(base + $.attr('href'), function (err, res, html) {
      if (err) return console.error(err);
      var phtml = cheerio.load(html);
      phtml('div.docs-content').each(function() {
        var $ = cheerio(this), resc = {};
        resc['name'] = $.find('h1').text();
        resc['fields'] = [];
        $('table#resource_fields tr').each(function() {
          $('td').first(function() {
            resc['fields'].push({ name: $(this).text()});
          });
        });
        console.log(resc);
      });
    });
  });
});

