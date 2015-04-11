'use strict';
module.exports = function (app) {

  var error404 = function (req, res) {
    res.status(400).send('Page Not Found :(');
  };

  var logErrors = function (err, req, res, next) {
    console.error(err.stack);
    next(err);
  };

  var clientErrorHandler = function (err, req, res, next) {
    res.status(500).send({error: 'Something blew up!'});
  };

  app.use(error404);
  app.use(logErrors);
  app.use(clientErrorHandler);
};
