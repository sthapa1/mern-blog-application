const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        default: null,
        trim: true,
    },
    lastname: {
        type: String,
        default: null,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);