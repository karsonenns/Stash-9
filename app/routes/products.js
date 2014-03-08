'use strict';

// Products routes use products controller
var products = require('../controllers/products');

module.exports = function(app) {

    app.get('/products', products.list);
    app.get('/product/:id', products.load);
    app.post('/product/create', products.create);
    app.put('/product/:id/edit', products.edit);
    app.delete('/product/:id/delete', products.delete);

};