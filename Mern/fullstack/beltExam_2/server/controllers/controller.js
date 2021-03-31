const Movie = require("../models/movie.model");

module.exports.createMovie = (req, res) => {
  Movie.exists({ title: req.body.title })
    .then(exists => exists ? Promise.reject({ errors: { title: { message: "A movie with that name exists!" } } }) : Movie.create(req.body))
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};


module.exports.createReview = (req, res) => {
  Movie.exists({ _id: req.params.id, "reviews.name": req.body.name })
    .then(exists => exists ? 
      Promise.reject({ name: { message: "You've already left a review on this movie" } })
      : Movie.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { reviews: req.body } }, { new: true, runValidators: true })) 
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => {
      if (err.errors) {
        res.json({ message: "error", errors: err.errors.reviews.errors})
      } else {
        res.json({ message: "error", errors: err })
      }
    });
};

module.exports.getAllMovies= (req, res) => { 
  Movie.find()
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.getOneMovie = (req, res) => {
  Movie.findById(req.params.id)
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.updateMovie = (req, res) => {
  Movie.exists({ name: req.body.name, _id: {$ne: req.params.id } })
    .then(exists => exists ?
      Promise.reject( { errors: { name: { message: 'Another movie with that name exists.' } }})
      : Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }))
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", errors: err.errors }));
};

module.exports.deleteMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params.id })
    .then(data => res.json({ message: "success", results: data }))
    .catch(err => res.json({ message: "error", results: err }));
};
