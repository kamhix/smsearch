'use strict';

var infoService = require('../services/info');

exports.getAdd = function (req, res, next) {
  res.render('info/add.html');
};

exports.postAdd = function (req, res, next) {
  var info = req.body.info;
  var tags = req.body.tags;

  if(!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(info)) {
    req.flash('errors', 'Vous devez renseigner une information.');
  }

  if(!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(tags)) {
    req.flash('errors', 'Vous devez renseigner des tags pour la recherche.');
  }

  if(errors) {
    return res.redirect('back');
  }

  infoService.addInfo(info, tags, function (err) {
    if (err) {
      return next(err);
    }

    req.flash('message', 'Votre information a bien été ajouté.');

    res.redirect('/message');
  });
};