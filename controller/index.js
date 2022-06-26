exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    });
};

exports.about = function(req, res, next) {
    res.render('index', { 
        title: 'About',
        userName: req.user ? req.user.username : ''
     });
}

exports.projects = function(req, res, next) {
    res.render('index', { 
      title: 'Projects',
      userName: req.user ? req.user.username : '' 
    });
}
exports.business = function(req, res, next) {
    res.render('index', { 
      title: 'Business Contact',
      userName: req.user ? req.user.username : '' 
    });
}