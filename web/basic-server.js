var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');


// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./archives');

var port = 8080;
var ip = '127.0.0.1';
var server = http.createServer(handler.handleRequest);

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}



//SERVER:
//listens for requests from client
//Handles requests:
//Posts to /archives/sites.txt 
//If: site is in /archives/sites/ then serve back to client
//else: serve 'loading' html

//WORKER:
//use chron
//read through /archives/sites.txt list, 
// if url has not been archived, then pull from site and store in archive
