var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  currentPage = 'HOME';
  res.render('business/index', { title: 'BoardTemplate'});
});
module.exports = router;
