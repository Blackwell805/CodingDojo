const MovieController = require("../controllers/controller");

module.exports = app => {
  //C
  app.post("/api/movies/new", MovieController.createMovie);
  app.post("/api/movies/:id/review", MovieController.createReview);
  //R
  app.get("/api/movies", MovieController.getAllMovies);
  app.get("/api/movies/:id", MovieController.getOneMovie);
  //U
  app.patch("/api/movies/:id", MovieController.updateMovie);
  //D
app.delete("/api/movies/:id", MovieController.deleteMovie);
};