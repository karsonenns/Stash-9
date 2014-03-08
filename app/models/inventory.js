'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Inventory Schema
 */
var InventorySchema = new Schema({
    productID: {
        type: ObjectID,
        ref: 'Product'
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    lowStockCount: {
        type: Number,
        default: 5
    },
    lowStockMessage: {
        type: String,
        default: ''
    }
});

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

InventorySchema.path('productID').validate(function(productID) {
    return productID.length;
}, 'Product ID cannot be blank');

InventorySchema.path('count').validate(function(count) {
    return typeof count === 'number';
}, 'Image URL cannot be blank');

mongoose.model('Inventory', InventorySchema);