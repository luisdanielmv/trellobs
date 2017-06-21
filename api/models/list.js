const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        boardId: {
            type: String,
            required: true
        }
    }
);

const us = mongoose.model('lists', listSchema);

module.exports = us;