'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');
var dotenv = require('dotenv');

var errors = require('./errors');
var router = require('./router');

var app = module.exports.app = exports.app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv._getKeysAndValuesFromEnvFilePath('.env.dev');
  dotenv._setEnvs();
}

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'nunjucks');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/../app'));

nunjucks.configure(app.get('views'), {
  autoescape: true,
  express: app
});

mongoose.connect(process.env.MONGODB_URL, function (err) {
  if (err) {
    console.log('Mongoose error:', err);
  }
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  next();
});

router(app);
errors(app);

app.listen(app.get('port'), function () {
  console.log('Express http server listening on port ' + app.get('port'));
});
