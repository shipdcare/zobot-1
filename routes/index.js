var express = require('express');
var router = express.Router();

var registrations = require('./registrations');
var login = require('./login');

router.get('/', function(req, res, next){
    res.render('home');
});

router.get('/health_check', function(req, res, next){
    res.send('ok');
});

router.use('/register', registrations);
router.use('/login', login);

module.exports = router;
