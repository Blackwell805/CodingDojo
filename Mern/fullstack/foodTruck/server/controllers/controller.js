const FoodTruck = require("../models/truck.model");

module.exports.createTruck = (req, res) => {
  FoodTruck.exists({ name: req.body.name })
    .then(exists => exists ? Promise.reject({ errors: { name: { message: "A food truck with that name exists!" } } }) : FoodTruck.create(req.body))
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.createReview = (req, res) => {
  FoodTruck.exists({ _id: req.params.id, "reviews.name": req.body.name })
    .then(exists => exists ? 
      Promise.reject({ name: { message: "You've already left a review on this truck" } })
      : FoodTruck.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { reviews: req.body } }, { new: true, runValidators: true }))
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => {
      if (err.errors) {
        res.json({ message: "error", errors: err.errors.reviews.errors})
      } else {
        res.json({ message: "error", errors: err })
      }
    });
};

module.exports.getAllTrucks = (req, res) => {
  FoodTruck.find()
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.getOneTruck = (req, res) => {
  FoodTruck.findById(req.params.id)
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};



module.exports.updateTruck = (req, res) => {
  FoodTruck.exists({ name: req.body.name, _id: {$ne: req.params.id } })
    .then(exists => exists ?
      Promise.reject( { errors: { name: { message: 'Another truck with that name exists.' } }})
      : FoodTruck.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }))
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.deleteTruck = (req, res) => {
  FoodTruck.deleteOne({ _id: req.params.id })
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", results: err }));
};
