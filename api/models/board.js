const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        ownerId: {
            type: String,
            required: true
        },
        members: {
            type: [String]
        }
    }
);

const us = mongoose.model('boards', boardSchema);

module.exports = us;