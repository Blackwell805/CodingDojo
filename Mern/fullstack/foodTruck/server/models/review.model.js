const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You may not leave an anoymous review."]
    },
    rating: {
        type: Number,
        required: [true, "Stop fiddling with things and give us a rating!"],
        min: [1, "Rating must be at least 1 star"],
        max: [5, "Rating cannot be more than 5 stars"]
    },
    review: {
        type: String,
        required: [true, "Why leave a review if you won't tell us what you think?"],
        minlength: [5, "Please write at least 5 characters."]
    }
})

module.exports = ReviewSchema