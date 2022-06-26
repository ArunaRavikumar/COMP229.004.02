var express = require('express');
const app = require('../app');
var router = express.Router();

let userController = require('../controller/userCollection');

// get lst
router.get('/userData/business', userController.UserCollectionList);
router.get('/userData/businessEdit', userController.UserCollectionList);
router.get('/userData/Edit', userController.UserCollectionList);

// Routers for edit
router.get('/edit/:id', userController.displayEditPage);
router.post('/edit/:id', userController.processEditPage);  

router.get('/delete/:id', userController.performDelete);
module.exports = router;