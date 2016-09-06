var models  = require('../models');
var express = require('express');
var registrations = express.Router();

registrations.get('/', function(req, res, next){
    res.render('register', { title: 'Signup for Zobot' });
});

registrations.get('/confirmation', function(req, res, next){
    res.render('registration_confirmation', {title: 'Thanks for registering with zobot'});
});

registrations.post('/', function(req, res, next){
    models.Registration.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        company_name: req.body.company_name,
        email: req.body.email,
        phone: req.body.phone
    }).then(function() {
        res.redirect('/register/confirmation');
    });
});

module.exports = registrations;