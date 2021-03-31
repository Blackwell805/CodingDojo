const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	"setup": String, //this is the model of which data will need to be in when using Postman.
	"punchline": String
});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;