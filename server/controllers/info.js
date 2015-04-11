'use strict';

var infoService = require('../services/info');

exports.getAdd = function (req, res, next) {
  res.render('info/add.html');
};

exports.postAdd = function (req, res, next) {
  var info = req.body.info.trim();
  var tags = req.body.tags.trim();

  if(info === '') {
    console.log('Vous devez renseigner une information.');
    req.flash('errors', 'Vous devez renseigner une information.');
    return res.redirect('back');
  }

  if(tags === '') {
    console.log('Vous devez renseigner des tags pour la recherche.');
    req.flash('errors', 'Vous devez renseigner des tags pour la recherche.');
    return res.redirect('back');
  }

  infoService.add(info, tags, function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }

    console.log('Votre information a bien été ajouté.');
    req.flash('message', 'Votre information a bien été ajouté.');

    res.redirect('/message');
  });
};

exports.message = function (req, res) {
  res.render('message.html', {
    message: req.flash('message')
  });
};