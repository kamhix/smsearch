'use strict';

var Info = require('../models/info');

exports.add = function (info, tags, callback) {

  var newInfo = new Info({
    info: info,
    tags: tags.toLowerCase()
  });

  newInfo.save(callback);
};

exports.list = function (callback) {
  Info.find({}, callback);
};

exports.get = function (id, callback) {
  Info.findOne({_id: id}, callback);
};

exports.update = function (id, newInfo, newTags, callback) {
  Info.findOne({_id: id}, function (err, info) {
    if (err) {
      return callback(err);
    }

    if (!info) {
      return callback(null, null);
    }

    info.info = newInfo;
    info.tags = newTags;
    info.save(callback);
  });
};

exports.delete = function (id, callback) {
  Info.remove({_id: id}, callback);
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
