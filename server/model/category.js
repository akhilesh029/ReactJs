const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,  // Ensures category name is unique
    },
    image: {
        type: String,  // URL to the image of the category
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
