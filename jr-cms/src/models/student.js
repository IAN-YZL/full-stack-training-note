const mongoose = require('mongoose');
const Course = require('./course');

const schema = new mongoose.Schema(
    {
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
        __v: {
            type: Number,
            select: false
        },
        courses: [{type: String, ref: 'Course'}],
    }
);

const model = mongoose.model('Student', schema);

module.exports = model;