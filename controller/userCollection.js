let UserModel = require('../models/userCollections');

module.exports.UserCollectionList = function(req, res, next) {
 
    UserModel.find((err, UserCollectionList)=>{
        // console.log(UserCollectionList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserCollectionList);
            
            res.render('userData/business', {
                title: 'Business Contacts',
                home: 'HOME',
                about: 'ABOUT ME',
                projects: 'PROJECTS',
                service: 'SERVICE PAGE',
                contact:'CONTACT ME',
                 business: 'BUSINESS CONTACTS',
                UserCollectionList: UserCollectionList
            })   
        }
    });
}
module.exports.UserCollectionList = function(req, res, next) {
 
    UserModel.find((err, UserCollectionList)=>{
        // console.log(UserCollectionList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserCollectionList);
            
            res.render('userData/Edit', {
                title: 'Business Contacts',
                home: 'HOME',
                about: 'ABOUT ME',
                projects: 'PROJECTS',
                service: 'SERVICE PAGE',
                contact:'CONTACT ME',
                 business: 'BUSINESS CONTACTS',
                UserCollectionList: UserCollectionList
            })   
        }
    });
}
module.exports.UserCollectionList = function(req, res, next) {
 
    UserModel.find((err, UserCollectionList)=>{
        // console.log(UserCollectionList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserCollectionList);
            
            res.render('userData/businessEdit', {
                title: 'Business Contacts',
                home: 'HOME',
                about: 'ABOUT ME',
                projects: 'PROJECTS',
                service: 'SERVICE PAGE',
                contact:'CONTACT ME',
                 business: 'BUSINESS CONTACTS',
                UserCollectionList: UserCollectionList
            })   
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    UserModel.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('userData/Edit', {
                title: 'Edit User', 
                users: userToEdit
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedUser = UserModel({
        _id: req.body.id,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phNum: req.body.phNum,
    });
   
    UserModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
          
            res.redirect('/userData/businessEdit');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    UserModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/userData/businessEdit');
        }
    });

} 