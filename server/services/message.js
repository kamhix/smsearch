'use strict';

var telerivet = require('telerivet');

exports.send = function (content, to_number, phone_id, callback) {
  var tr = new telerivet.API(process.env.TELERIVET_API);
  var project = tr.initProjectById(process.env.TELERIVET_PROJECT);

  project.sendMessage({
    content: content,
    to_number: to_number
  }, function(err, message) {
      if (err) {
        callback(err);
      }

      callback(null, message)

  });


};