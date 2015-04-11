'use strict';

var Info = require('../models/info');

exports.add = function (info, tags, callback) {

  var newInfo = new Info({
    info: info,
    tags: tags.toLowerCase()
  });

  newInfo.save(callback);
};

exports.search = function (message, callback) {
  message = message.toLowerCase();
  message = message.split(' ');

  if(message.length > 0) {
    var query = Info.find({ $text: { $search: message[0] } });
  }

  for (var i = 1, n = message.length; i < n; i++) {
    query = query.find({ $text: { $search: message[i] } });
  };

  query.exec(callback);
};
