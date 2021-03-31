const mongoose = require("mongoose");
const QuoteSchema = require('./quote.model');

const AuthorSchema = new mongoose.Schema({
	author: {type: String},
    quotes: [QuoteSchema]
}, {timestamps:true});

module.exports.Author= mongoose.model("Author", AuthorSchema);
//This is the "anchor". When it comes to creating new items, this is the anchor of what will be referenced. The QuoteSchema, also a model but not the anchor, is being used here because it was imported/exported. 