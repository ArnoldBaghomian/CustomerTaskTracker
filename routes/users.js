'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function(req, res, next) {
  User.find({}, function(err, allUser) {
    if (err) return console.log(err);
    res.send(allUser);
  });
});

router.post('/', function(req, res, next) {
  var user = {
    user: req.body.user,
    date: req.body.date,
    complete: req.body.complete
  };
  User.create(user, function(err, savedUser) {
    if (err) return console.log(err);
    res.send(User);
  });
});

module.exports = router;
