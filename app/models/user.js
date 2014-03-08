'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    imageURL: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    gender: String,
    birthDate: Date,
    isStocker: {
        type: Boolean,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: 1
    }
});

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

UserSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

UserSchema.path('imageURL').validate(function(imageURL) {
    return imageURL.length;
}, 'Image URL cannot be blank');

UserSchema.path('email').validate(function(email) {
    return (typeof email === 'string' && email.length > 0);
}, 'Email cannot be blank');

mongoose.model('User', UserSchema);