'use strict';

var messageService = require('../services/message');

exports.send = function (req, res, next) {
  res.send("The message was succesfully sent!");
};

exports.get = function (req, res, next) {
  var secret = req.body.secret;

  if (secret !== process.env.WEBHOOK_SECRET) {
      res.status(403).end();
      return;
  }

  if (req.body.event == 'incoming_message') {

    var content = req.body.content;
    var from_number = req.body.from_number;
    var phone_id = req.body.phone_id;

    infoService.search(content, function (err, result) {
      if (err) {
        console.log(err);
      }

      messageService.compose(result, function (message) {
        messageService.send(message, from_number, phone_id, function (err, message) {
          if (err) {
            res.status(400).end();
          }
        });
      });
    });
  }

  res.status(200).end();
}
