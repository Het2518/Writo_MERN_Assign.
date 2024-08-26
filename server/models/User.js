const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    contactMode: {type: String, enum: ['email', 'phone'], default: 'email'},
    otp: {type: String},
    otpExpires: {type: Date},
    isVerified: {type: Boolean, default: false},
});

module.exports = mongoose.model('User', userSchema);