var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  currentPage = 'HOME';
  res.render('business/index', { title: 'BoardTemplate'});
});
/* GET login page. */
router.get('/login', function(req, res, next) {  
  currentPage = 'LOGIN';
  res.render('business/login', { title: 'BoardTemplate-login'});
});
module.exports = router;
