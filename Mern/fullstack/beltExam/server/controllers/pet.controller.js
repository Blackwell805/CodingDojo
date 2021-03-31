const Pet = require("../models/pet.model");

//Be sure to change properly. Replace words that are capitalized with a capitalized word. etc. 

//C
module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors}));
};

//R
module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then(data => res.json({ message: "success", results: data })) //The key 'message:' is what I will put after response.data when doing API call.
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.findOneSinglePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(data => res.json({ message: "success", results: data })) //results=the key being used to access the "pets" which is inside of "data"!!! Know what you are trying to access.
		.catch(err => res.json({ message: "error", errors: err.errors }));
};


//U
module.exports.updateExistingPet = (req, res) => {
  console.log('Hello!!!!')
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true,  runValidators:true }) //This is a {Query},{Data},{options} format with all in a key:value pair.   _id: is what you are updating. The req.params.id is what you are updating. The new:true means when you perform this update is saying "Do you want the original or the new?" RunValidators is done because the default is set for true in the models. 
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};
// module.exports.updateExistingUser = (req, res) => {
//   Pet.findOneAndUpdate({ _id: req.params.id }, {$addToSet:<---this is pushing it into an array---- {quotes: req.body}}, { new: true, runValidators:true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

//D
module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

// module.exports.like=(req, res) => {
//   Pet.findOneAndUpdate({_id: req.params.id}, {$inc: {"likes": 1}},
//   {new:true, useFindAndModify: false, runValidators:true})
//   .then(data=>res.json({message:'success', results: data}))
// };