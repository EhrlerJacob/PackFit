const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "Category is Required to Post"],
    },
    length: {
        type: Number,
        required: [true, "Length is Required"],
        minLength: [10, "Minimum Length is 10."]
    },
    notes: {
        type: String,
        required: [true, "Notes are Required"],
        maxLength: [300, "Max of 300 characters."]
    }
}, {timestamps: true});

module.exports = mongoose.model("Blog", BlogSchema);