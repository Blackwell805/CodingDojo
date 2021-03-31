const mongoose = require("mongoose");


const QuoteSchema = new mongoose.Schema({
	quote: {
		type: String,
		minLength: [3, "The quote must be longer than 3 characters!"],
		required: [true, "Quote is required in the string!"]
	},
	votes: {type: Number}
}, {timestamps:true});



module.exports=QuoteSchema;
//This exports allows for the file to be imported to other files that need to use the information

