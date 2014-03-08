'use strict';

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};

exports.init = function(req, res) {
  res.render('index', {
  	users: JSON.stringify(users.list),
  	products: JSON.stringify(products.list)
  });
});