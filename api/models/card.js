const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required:true
        },
        listId: {
            type: String,
            required: true
        },
        position: {
            type: Number,
            required: true
        },
        dueDate: {
            type: String,
            required: true
        },
        members: {
            type: [String],
            required: true
        }
    }
);

const us = mongoose.model('cards', cardSchema);

module.exports = us;