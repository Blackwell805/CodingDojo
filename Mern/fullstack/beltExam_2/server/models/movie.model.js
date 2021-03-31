const mongoose = require("mongoose");
const ReviewSchema = require('./review.model')

const MovieSchema = new mongoose.Schema({

		title: {
			type: String,
			required: [true, "You must enter a name for the movie!"],
			minlength: [5, 'Please enter at least 5 characters.']
		},
		reviews: [ReviewSchema]
}, {timestamps: true});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;