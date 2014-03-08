'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Consumption Schema
 */
var ConsumptionSchema = new Schema({
    // userID: {
    //     type: Schema.ObjectID,
    //     ref: 'User',
    //     required: true
    // },
    // productID: {
    //     type: Schema.ObjectID,
    //     ref: 'Product',
    //     required: true
    // },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true
    }
});

/**
 * Validations
 */

// ConsumptionSchema.path('userID').validate(function(userID) {
//     return userID.valueOf();
// }, 'User ID cannot be blank');

// ConsumptionSchema.path('productID').validate(function(productID) {
//     return productID.valueOf();
// }, 'Product ID cannot be blank');

ConsumptionSchema.path('dateAdded').validate(function(dateAdded) {
    return (typeof dateAdded === 'Date' && dateAdded.length > 0);
}, 'Date must be a valid date');

mongoose.model('Consumption', ConsumptionSchema);