const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        },
        color: {
            type: String
        }
    }
);

const tag = mongoose.model('tags', tagSchema);

module.exports = tag;