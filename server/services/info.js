'use strict';

var Info = require('../models/info');

exports.add = function (info, tags, callback) {

  var newInfo = new Info({
    info: info,
    tags: tags.toLowerCase()
  });

  newInfo.save(callback);
};