const mongoose = require("mongoose");
const ReviewSchema = require('./review.model')

const TruckSchema = new mongoose.Schema({

		name: {
			type: String,
			required: [true, "You must enter a name for the food truck!"],
			minlength: [5, 'Please enter at least 5 characters.']
		},
		style: {
			type: String,
			required: [true, "Please enter a cuisine style."],
			minlength: [3, "Cuisine style must be at lease 3 characters."]
		},
		description: {
			type: String,
			required: [true, "You must leave a description of this food truck!."],
			minlength: [10,  "Description must be at least 10 characters in length."]
		},
		reviews: [ReviewSchema]
}, {timestamps: true});

const FoodTruck = mongoose.model("food_truck", TruckSchema);

module.exports = FoodTruck;