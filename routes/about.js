/* File name: About me file 
Name: Aruna Ravi Kumar
ID: 301243154
Date: 06-04-2022
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('about', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME',
    business: 'BUSINESS CONTACTS'
  });
});


module.exports = router;
