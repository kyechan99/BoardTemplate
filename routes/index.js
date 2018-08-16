var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  currentPage = 'HOME';
  res.render('business/index', { title: 'BoardTemplate'});
});
/* GET login page. */
// router.get('/login', function(req, res, next) {  
// 	currentPage = 'LOGIN';
// 	res.render('business/login', { title: 'BoardTemplate-login'});
// });
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  // url = req.url;
  currentPage = 'CONTACT';
  res.render('business/contact', { title: 'BoardTemplate-contact'});
});
module.exports = router;
