const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        default: null,
        trim: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', categorySchema);