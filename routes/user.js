var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {  
    currentPage = 'LOGIN';
    res.render('business/login', { title: 'BoardTemplate-login'});
});
module.exports = router;
