'use strict';

var express= require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var routes = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// SET VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

// 404
app.use(function(req, res, next){
    var err = new Error('File not found');
    err.status = 404;
    next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;