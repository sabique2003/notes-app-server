const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Automatically adds createdAt & updatedAt fields

const Note = mongoose.model("Note", NoteSchema); // Use singular form
module.exports = Note;
