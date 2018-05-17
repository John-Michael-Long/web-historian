// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var http = require('http');
var archive = require('../helpers/archive-helpers');
//probably need a request handler? or can we just do it in the server


//ports? ip? can they be the same?
//or do we just need a fetch request? 

//requset module npm 
//fs method to check files 


archive.readListOfUrls((data) => {
  //for each element in data
  //check to see if in archive
  //if not then call download url
  data.forEach((site) => {
    archive.isUrlArchived(site, (check) => {
      if(!check) {
        archive.downloadUrl(site)
      }
    })
  })
  
});