var express = require('express');
var registrations = express.Router();

registrations.get('/', function(req, res, next){
    res.render('login', { title: 'Zobot Login' });
});

registrations.post('/', function(req, res, next){
    res.send('Login complete');
});

module.exports = registrations;