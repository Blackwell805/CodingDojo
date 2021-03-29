const TruckController = require("../controllers/controller");

module.exports = app => {
  //C
  app.post("/api/trucks", TruckController.createTruck);
  app.post("/api/trucks/:id/review", TruckController.createReview);
  //R
  app.get("/api/trucks", TruckController.getAllTrucks);
  app.get("/api/trucks/:id", TruckController.getOneTruck);
  //U
  app.patch("/api/trucks/:id", TruckController.updateTruck);
  //D
app.delete("/api/trucks/:id", TruckController.deleteTruck);
};