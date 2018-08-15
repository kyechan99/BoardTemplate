var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {  
	currentPage = 'LOGIN';
	res.render('business/login', { title: 'BoardTemplate-login'});
});

var authUser = function(database, id, password, callback) {
	console.log('authUser 호출됨 : ' + id + ', ' + password);
	
	var user = database.collection('users');

	user.find({"id":id, "pw":password}).toArray(function(err, docs) {
		if (err) {
			callback(err, null);
			return;
		}
	    if (docs.length > 0) {
	    	console.log('아이디 [%s], 패스워드 [%s] 가 일치하는 사용자 찾음.', id, password);
	    	callback(null, docs);
	    } else {
	    	console.log("일치하는 사용자를 찾지 못함.");
	    	callback(null, null);
	    }
	});
}

router.route('/login').post(function(req, res) {
	console.log('/login 호출됨.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
	
    console.log('요청 파라미터 : ' + paramId + ', ' + paramPassword);
    
	if (global.db) {
		authUser(global.db, paramId, paramPassword, function(err, docs) {
			if (err) {throw err;}
			
			// SUCCESS
			if (docs) {
				console.dir(docs);
                // 조회 결과에서 사용자 이름 확인
				var id = docs[0].id;
				
				// res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				// res.write('<h1>로그인 성공</h1>');
				// res.write('<div><p>사용자 아이디 : ' + paramId + '</p></div>');
				// res.write('<div><p>사용자 이름 : ' + nickname + '</p></div>');
				// res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
				// res.end();
				// res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                // res.render('business/rooms', { title: 'GAPA Game Room page'});
				// res.end();			
			} else {
				res.render('business/user', { title: 'BoardTemplate-login'});
				// res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
				// res.write('<h1>로그인  실패</h1>');
				// res.write('<div><p>아이디와 패스워드를 다시 확인하십시오.</p></div>');
				// res.write("<br><br><a href='/public/login.html'>다시 로그인하기</a>");
				// res.end();
			}
		});
	} else {
		res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
		res.write('<h2>데이터베이스 연결 실패</h2>');
		res.write('<div><p>데이터베이스에 연결하지 못했습니다.</p></div>');
		res.end();
	}
	
});


module.exports = router;
