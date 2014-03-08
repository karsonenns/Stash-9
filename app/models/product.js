'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Product Schema
 */
var ProductSchema = new Schema({
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateModified: {
        type: Date,
        default: Date.now
    },
    categoryIDs: {
        type: [Schema.ObjectId],
        ref: 'Category'
    },
    name: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    imageURL: {
        type: String,
        default: '',
        trim: true,
        required: true
    },
    unit: {
        type: Number,
        default: 1
    },
    abuseMessage: {
        type: String,
        default: '',
        trim: true
    },
    isAlcoholic: {
        type: Boolean,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
ProductSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

ProductSchema.path('imageURL').validate(function(imageURL) {
    return imageURL.length;
}, 'Image URL cannot be blank');

/**
 * Statics
 */
// ProductSchema.statics.load = function(id, cb) {
//     this.findOne({
//         _id: id
//     }).populate('user', 'name username').exec(cb);
// };

mongoose.model('Product', ProductSchema);
