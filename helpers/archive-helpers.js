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

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  //read sites.txt, format data
  //call isUrlinList
};

exports.isUrlInList = function(url, callback) {
  //if not in list, then call addUrlToList
    //return loading.html to client
  //if it is in the list,
    //return the archives/sites (appropriate site)
};

exports.addUrlToList = function(url, callback) {
  //fs.appendFile to our sites.txt
};

exports.isUrlArchived = function(url, callback) {
  //worker? 
  //work is going to read our list of urls, 
  // if a url in the list is not archives/sites
    // then we need to call downloadUrls
};

exports.downloadUrls = function(urls) {
  //this will have to do some .ajax request, get the site info
  //add site info as a new file in archives/sites
};
