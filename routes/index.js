/* File name: Home file 
Name: Aruna Ravi Kumar
ID: 301243154
Date: 06-04-2022
*/


var express = require('express');
var router = express.Router();

let userController = require('../controller/userCollection');
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME',
    business: 'BUSINESS CONTACTS'
  });
});
// get about page
router.get('/', about);
function about(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME',
     business: 'BUSINESS CONTACTS'
  });
}
// get projects page
router.get('/', projects);
function projects(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME',
    business: 'BUSINESS CONTACTS'
  });
}
// get service page
router.get('/', service);
function service(req, res, next) {
  res.render('index', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME',
    business: 'BUSINESS CONTACTS'
  });
}
// get contact page
router.get('/',function(req, res, next) {
  res.render('contact', { 
    title: 'Aruna Portfolio',
    home: 'HOME',
    about: 'ABOUT ME',
    projects: 'PROJECTS',
    service: 'SERVICE PAGE',
    contact:'CONTACT ME',
    business: 'BUSINESS CONTACTS'
  });
});
// get business page
router.get('/userData/business', userController.UserCollectionList);
router.get('/userData/businessEdit', userController.UserCollectionList);
router.get('/userData/Edit', userController.UserCollectionList);
router.get('/edit/:id', userController.displayEditPage);
router.post('/edit/:id', userController.processEditPage);  

router.get('/delete/:id', userController.performDelete);
module.exports = router;
