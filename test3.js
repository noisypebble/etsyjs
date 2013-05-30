var request = require('request')
  , cheerio = require('cheerio');

var ref = 'https://www.etsy.com/developers/documentation/#reference';

function parseHTML(err, res, html) {
  if (err) return console.error(err);
  var phtml = cheerio.load(html);
  var resrc = [];
  phtml(
}

http.request(options, callback).end();
