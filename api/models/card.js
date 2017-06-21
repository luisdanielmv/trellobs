const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
    {
        desc: {
            type: String,
            required:true
        },
        listId: {
            type: String,
            required: true
        },
        postiton: {
            type: Number,
            required: true
        }
    }
);

const us = mongoose.model('cards', cardSchema);

module.exports = us;