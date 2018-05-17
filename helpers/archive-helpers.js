var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

exports.archivedSitesList = {};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  
  fs.readFile(exports.paths.list, (err, data) => {
    if (err) {
      throw error;
    } else {
      let dataArr = data.toString().split('\n');
      callback(dataArr.slice(0, dataArr.length - 1));
    }
  });
  
  //read sites.txt, format data
  //call isUrlinList
  
  //callback could return formmated list of sites.txt
  //to another function (e.g. isUrlList)
};

// fs.readFile()

exports.isUrlInList = function(url, callback) { 
  
  exports.readListOfUrls((data) => {
    if (data.indexOf(url) === -1) {
      callback(null, null); 
      exports.addUrlToList(url);
    //if not in list, 
      //send loading.html to client
      //add url to list
      
    } else if (exports.isUrlArchived((check) => check)) {
    //return site to client
    
    } else if (data.indexOf(url) !== -1 && !exports.isUrlArchived((check) => check)) {
    //serve loading.html to client
      callback(null, null); 
    }
    
          
    //if the data is in the list, 
    // and it is in the is UrlArachived is true
    //send client to url endpoint in archives/sites
    //because, if crom hasn't added the site, we don't 
    //want to send the user to an endpoint we don't have
      
    //send archived site to client
    //if this url is in our object referencing downloaded sites
    //send our client to that endpoint
  });
  // call readListOfUrls(callback)
  //callback = f() ??

  //if url is in list,
  
  // IF error:
  //callback();
  // IF NOT IN LIST;
  //callback(null, null);
};

exports.addUrlToList = function(url, callback) {
  //fs.appendFile to our sites.txt
  fs.appendFile(exports.paths.list, url, 'utf8', (err) => {
    if (err) {
      throw err;
    } else {
      console.log('wrote to file url::: ', url); 
    }
  });
  
};

exports.isUrlArchived = function(url, callback) {
  //check tests for ideas to see if a url has been archived or not
  //worker? 
  //work is going to read our list of urls, 
  // if a url in the list is not archives/sites
  // then we need to call downloadUrls

  fs.access(exports.paths.archivedSites + '/' + url, fs.constants.F_OK, (err) => {
    if (err) {
      callback(false);
    } else {
      callback(true);
    }
  }); 
 
    
};

exports.downloadUrls = function(urls) {
  //this will have to do some .ajax request, get the site info
  //add site info as a new file in archives/sites
  
  //once downloadUrls is completed,
  //add urls to an object
  //which will later be access to serve client urls that 
  //have been added to archives/sites/...url
  console.log('downloading: ', url);
    
};
