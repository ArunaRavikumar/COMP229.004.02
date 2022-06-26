var express = require('express');
const app = require('../app');
var router = express.Router();

let userController = require('../controller/userCollection');

let userCollection = require('../models/userCollections');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}


// get lst
router.get('/userData/business', userController.UserCollectionList);
router.get('/userData/businessEdit', requireAuth, userController.UserCollectionList);
router.get('/userData/Edit', requireAuth, userController.UserCollectionList);

// Routers for edit
router.get('/edit/:id', requireAuth, userController.displayEditPage);
router.post('/edit/:id', requireAuth, userController.processEditPage);  

router.get('/delete/:id', requireAuth, userController.performDelete);
module.exports = router;

