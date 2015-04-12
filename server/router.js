'use strict';

var messageController = require('./controllers/message');
var infoController = require('./controllers/info');

var rootRedirect = function (req, res) {
  res.render('/index.html');
};

module.exports = function (app) {
  app.get('/', rootRedirect);

  app.post('/messages/send', messageController.send);
  app.post('/messaged/get', messageController.get);

  app.get('/info/add', infoController.getAdd);
  app.post('/info/add', infoController.postAdd);

  app.get('/info/try', infoController.getTry);
  app.post('/info/try', infoController.try);

  app.get('/message', infoController.message);
};
