'use strict';

// Consumptions routes use consumptions controller
var consumptions = require('../controllers/consumptions');

module.exports = function(app) {

    app.get('/consumptions', consumptions.list);
    app.get('/consumption/user/:id', consumptions.list);
    app.get('/consumption/product/:id', consumptions.load);
    app.post('/consumption/user/:id/product/:id', consumptions.create);

};