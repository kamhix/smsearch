'use strict';

var messageController = require('./controllers/message');
var demosController = require('./controllers/demos');

var rootRedirect = function (req, res) {
  res.send('Hello World !');
};

module.exports = function (app) {
  app.get('/', rootRedirect);

  app.post('/messages/send', messageController.send);

  app.post('/messages/get', messageController.get);

  app.get('/demos/simple', demosController.simple);
};
