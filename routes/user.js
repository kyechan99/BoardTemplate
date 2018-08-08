var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  boardLength = 10;
  currentPage = 'USER';
  database = [
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['1', 'This is temp Title _ 0', 'kyechan', '2018-08-01'],
    ['2', 'This is temp Title _ 1', 'henry', '2018-08-03'],
    ['3', 'This is temp Title _ 2', '0814', '2018-08-03'],    
    ['4', 'This is temp Title _ 3', 'kyechan', '2018-08-04'],
    ['5', 'This is temp Title _ 4', 'henry', '2018-08-04'],
    ['6', 'This is temp Title _ 5', 'kyechan', '2018-08-04'],
    ['7', 'This is temp Title _ 6', 'henry', '2018-08-06'],
    ['8', 'This is temp Title _ 7', '0814', '2018-08-07'],
    ['9', 'This is temp Title _ 8', 'henry', '2018-08-08'],
    ['10', 'This is temp Title _ 9', 'kyechan', '2018-08-09'],
    ['11', 'This is temp Title _ 10', 'henry0814', '2018-08-10'],
    ['12', 'This is temp Title _ 11', 'kyechan', '2018-08-11'],
    ['13', 'This is temp Title _ 12', 'henry', '2018-08-011']
  ];

  // Board Pagination ==============================================================
  if (req.query.boardIdx)
    boardIdx = Number(req.query.boardIdx);
  else
    boardIdx = 1;

  userData = [];
  for (i = (boardIdx-1) * boardLength; i < boardIdx* boardLength; i++) {
    if (database.length <= i)
      break;
    userData.push(database[i]);
  }

  if (boardIdx % 5 == 0) {
    if (boardIdx > 5) 
      prevIdx = boardIdx - 5;
    else
      prevIdx = 1;
    startIdx = boardIdx - 5 + 1;
    lastIdx = boardIdx + 1;
    nextIdx = lastIdx;
  } else {
    if (boardIdx > 5) {
      prevIdx = boardIdx - (boardIdx % 5);
      startIdx = prevIdx + 1;
    } else {
      prevIdx = 1;
      startIdx = 1;
    }

    lastIdx = boardIdx + 5 - (boardIdx % 5) + 1;
    nextIdx = lastIdx;
    if (lastIdx > database.length / boardLength) {
      lastIdx = Math.ceil(database.length / boardLength) + 1;
      nextIdx = lastIdx - 1;
    }
  }
  // ===============================================================================
  
  res.render('business/user', { title: 'BoardTemplate-user'});
});

module.exports = router;
