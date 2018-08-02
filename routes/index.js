var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  userData = [
    ['This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['This is temp Title _ 1', 'henry', '2018-08-03'],
    ['This is temp Title _ 2', '0814', '2018-08-03']
  ];
  
  res.render('business/index', { title: 'Express' });
});

module.exports = router;
