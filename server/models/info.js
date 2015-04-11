'use strict';

var mongoose = require('mongoose');

var InfoSchema = new mongoose.Schema({
  info: {type: String},
  tags: {type: [String], index: true}
});

module.exports = mongoose.model('Info', InfoSchema);
