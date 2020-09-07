const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        _id: {
            type: String,
            alias: 'studentID'
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    }
);

const model = mongoose.model('Student', schema);

module.exports = model;