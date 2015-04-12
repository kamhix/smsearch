'use strict';

var Info = require('../models/info');

exports.add = function (info, tags, callback) {

  var newInfo = new Info({
    info: info,
    tags: tags.toLowerCase()
  });

  newInfo.save(callback);
};

var regexify = function (params) {
  var regex = '';

  for (var i = 0; i < params.length; i++) {
    regex += '(?=.*' + params[i] + ')';
  }

  return regex;
}

exports.search = function (message, callback) {
  message = message.toLowerCase();
  message = message.split(' ');

  if(message.length > 0) {
    var regex = new RegExp(regexify(message));

    Info.find({tags: regex}, function(err,q){
        if (err) {
          return callback(err);
        }

        return callback(null, q);
    });
  }
};
