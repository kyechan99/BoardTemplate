var express = require('express');
var router = express.Router();

var getBBS = function(startIdx, boardLength, callback) {
  var bbs = global.db.collection('bbs');
	bbs.countDocuments({},{},function(err, result) {
		if (err) {
			callback(err, null);
			return;
    }
    
    databaseLength = result;
    if (databaseLength > 0) {
      bbs.find().skip(startIdx).limit(boardLength).toArray(function(err, result) {
        if (err) {
          callback(err, null);
          return;
        }
        
        if (result.length > 0) {
          callback(null, result);
        } else {
          callback(null, null);
        }
      });
    }
  });	
}


/* GET board listing. */
router.get('/', function(req, res, next) {
  boardLength = 10;       // !!!  SET How many list on the screen  !!!
  currentPage = 'BOARD';
  boardIdx = 1;
  boardData = [];

  if (req.query.boardIdx)
    boardIdx = Number(req.query.boardIdx);
    
  if (global.db) {
    getBBS((boardIdx-1) * boardLength, boardLength, function(err, result) {
      if (err) throw err; 

      if (result) {
        database = result;
        for (i = 0; i< result.length; i++) {
          boardData.push(database[i]);
        }
        
        // Pagination ==============================================================
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
          if (lastIdx > databaseLength / boardLength) {
            lastIdx = Math.ceil(databaseLength / boardLength) + 1;
            nextIdx = lastIdx - 1;
          }
        }
        // ===============================================================================

        res.render('business/board', { title: 'BoardTemplate-board'});
      }
    });

  } else {
    console.log("Can't Found global.db !!");
  }
});



module.exports = router;
