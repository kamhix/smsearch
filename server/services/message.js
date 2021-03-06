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

      callback(null, message);

  });


};

exports.compose = function (results, callback) {
  var content = [];

  for (var i = 0; i < results.length; i++) {
    content.push(results[i].info);
  };

  if(content.length === 0) {
    callback("Aucun resultat trouvé.");
  } else {
    callback(content.join('\n'));
  }
};
