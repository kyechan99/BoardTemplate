var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoClient = require('mongodb').MongoClient;
global.database = null;

var indexRouter = require('./routes/index');
var boardRouter = require('./routes/board');
var usersRouter = require('./routes/user');

var app = express();
var config = require('./config/config');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/bootswatch/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));

app.use('/', indexRouter);
app.use('/board', boardRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('business/error');
});

function connectDB() {
  // var databaseUrl = 'mongodb://localhost:27017/';
  mongoClient.connect(config.db_url, {useNewUrlParser:true}, function(err, db) {
    if (err) throw err;
    console.log('Database Connected : ' + config.db_url);
    global.db = db.db('btDB');
  });
}

app.listen(process.env.PORT || config.server_port, function(){
  global.url = config.domain + ':' + config.server_port;
  connectDB();
});

module.exports = app;
