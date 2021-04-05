const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1,
        maxlength: 100,
        match: [/^[A-Za-z]+$/, 'First name contains invalid characters']
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1,
        maxlength: 100,
        match: [/^[A-Za-z]+$/, 'Last name contains invalid characters']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
}, );

const User = mongoose.model('User', userSchema);

module.exports = User;