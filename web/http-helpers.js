var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  console.log('entered serveAssets. asset:', asset );
  
  fs.readFile(asset, callback);
  
  
};


exports.writeToFile = function(message) {
  
  message = message.substring(4) + '\n';
  
  fs.appendFile(archive.paths.list, message, 'utf8', (err) => {
    if (err) { throw err; }
    console.log('wrote url ' + message + ' to sites.txt');
  });
};



// As you progress, keep thinking about what helper functions you can put here!
