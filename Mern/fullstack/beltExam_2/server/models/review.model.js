const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "There must be a name to this review!."]
    },
    rating: {
        type: Number,
        required: [true, "You forgot to give us a rating!"],
        min: [1, "Rating must be at least 1 star"],
        max: [5, "Rating cannot be more than 5 stars"]
    },
    review: {
        type: String,
        required: [true, "You forgot to tell us the review!"],
        minlength: [5, "Please write at least 5 characters."]
    }
})

module.exports = ReviewSchema