var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');
// require more modules/folders here!

var sendResponse = function(res, asset, data, statusCode = 200 ) {
  res.writeHead(statusCode, httpHelpers.headers);
  
  httpHelpers.serveAssets(res, asset, function(err, data) {
    if(err) { 
      return console.error(err);   //need to handle error good
    }  
    res.end(data.toString());
  });

};

exports.handleRequest = function (req, res) {
  
  console.log('req.method:',req.method)
  console.log('req.url:',req.url)
  
  if(req.method === 'GET') {
    sendResponse(res, archive.paths.siteAssets + '/index.html' )
    
  } else if (req.method === 'POST') {
    
    //************** get message ************
    let body = [];
    req.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      let url = body.substring(4) + '\n';
      
      archive.isUrlInList(url, function(err, data) {
        if(err) {
          throw error;
        } else if (data === null) {
          //do something with data
          //send loading.html to client
          sendResponse(res, archive.paths.siteAssets + '/loading.html' , null, 302)
          console.log('DATA IS NULL');
        }
      })
      
      //Need to implement archive-helpers...
      
      //httpHelpers.writeToFile(body)
      
      
      
      //TODO: send the status code... writeHead(302...etc)
      // res.writeHead(302, httpHelpers.headers);
      // res.end();
    });
    
  
  }

  //res.end(archive.paths.list);
};

//SERVER:
//listens for requests from client
//Handles requests:
  //Posts to /archives/sites.txt 
  //If: site is in /archives/sites/ then serve back to client
  //else: serve 'loading' html

