const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:true
        },
        content: {
            type: String
        },
        notebook: {
            type: String
        },
        tags: {
            type: [String]
        }
    }
);

const note = mongoose.model('notes', noteSchema);

module.exports = note;