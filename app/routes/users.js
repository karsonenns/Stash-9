'use strict';

// User routes use users controller
var users = require('../controllers/users');

module.exports = function(app) {

    app.get('/users', users.list);
    app.get('/user/:id', users.load);
    app.post('/user/create', users.create);
    app.put('/user/:id/edit', users.edit);
    app.delete('/user/:id/delete', users.delete);

    // Setting the local strategy route
    // app.post('/users/session', passport.authenticate('local', {
    //     failureRedirect: '/signin',
    //     failureFlash: true
    // }), users.session);
};
