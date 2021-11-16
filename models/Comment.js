const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    message : {
        type: String,
        default: null,
        trim: true,
    },
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);