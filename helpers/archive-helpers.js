var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

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
};

// fs.readFile()

exports.isUrlInList = function(url, callback) { 
  
  exports.readListOfUrls((data) => {
    
    console.log('URL list:', data);
    
    if (data.indexOf(url) === -1) {
      callback(null, null); 
      exports.addUrlToList(url);
      
    } else {
      exports.isUrlArchived(url, (check) => {
        if (check) {
          callback(null, true);
        } else {
          callback(null, null);
        }
      });
    } 
  });
};

exports.addUrlToList = function(url, callback) {
  //fs.appendFile to our sites.txt
  url = url + '\n';
  fs.appendFile(exports.paths.list, url, 'utf8', (err) => {
    if (err) {
      throw err;
    } else {
      console.log('wrote to file url::: ', url); 
    }
  });
  
};

exports.isUrlArchived = function(url, callback) {

  fs.access(exports.paths.archivedSites + '/' + url + '.txt', fs.constants.F_OK, (err) => {
    if (err) {
      console.log('isUrlArchived: FALSE');
      callback(false);
    } else {
      console.log('isUrlArchived: TRUE');
      callback(true);
    }
  });     
};

exports.downloadUrls = function(url) {
 
  console.log('downloading: ', url);
    
  request('http://' + url).pipe(fs.createWriteStream(exports.paths.archivedSites + '/' + url + '.txt'));
  
  console.log('after request');
};












