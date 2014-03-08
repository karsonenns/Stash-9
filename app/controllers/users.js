'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Get all users
 */
exports.list = function(req, res){
    res.jsonp(req.users.find);
};

/**
 * Get user by ID
 */
exports.load = function(req, res){
    res.jsonp(req.users.find({ objectID: req.params.id });
};

/**
 * Create user
 */
exports.create = function(req, res){
    var user = new User(req.body),
        isSuccessful = 1,
        message = null;

    user.save(function(err){
        if(err){
            isSuccessful = 0;
            switch(err.code){
                case 11000:
                case 11001:
                    message = "User already exists"
                    break;
                default:
                    message = "Missing required fields"
            }

            return res.jsonp({
                isSuccessful: isSuccessful, 
                errors: message
            });
        }

        return res.jsonp({
            isSuccessful: isSuccessful,
            user: user
        });
    });
};

/**
 * Edit User
 */
exports.edit = function(req, res){
    var user = req.user,
        isSuccessful = 1;

    user = _.extend(user, req.body);

    user.save(function(err){
        if(err){
            isSuccessful = 0;
            return res.jsonp({
                isSuccessful: isSuccessful,
                errors: err.errors,
                user: user
            });
        }

        res.jsonp(user);
    });
}

/**
 * Update an article
 */
exports.update = function(req, res) {
    var article = req.article;

    article = _.extend(article, req.body);

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};



/**
 * Send User
 */
exports.me = function(req, res) {
    res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    User
        .findOne({
            _id: id
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.profile = user;
            next();
        });
};