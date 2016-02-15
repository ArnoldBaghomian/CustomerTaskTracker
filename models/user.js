'use strict';

var mongoose = require('mongoose');


var User;

var userSchema = mongoose.Schema({
  task: {type: String, required:true},
  date: {type: Date, required:true},
  complete: {type: String, required:true}

});



User = mongoose.model('User', userSchema);

module.exports = User;
