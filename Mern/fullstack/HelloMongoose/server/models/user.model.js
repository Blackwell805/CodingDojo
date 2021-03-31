const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{
		type: String,
		// required: [true, "Author name is required"],
		// minlength: [3, "Author name must be at least 3 characters long"]
	},
	age: {
		type: Number,
		// required: [true, "Author must have an age"],
		// min:[1, "Author's age cannot be a negative number"],
		// max: [150, "age entered in can't be over 150"]
	}
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;