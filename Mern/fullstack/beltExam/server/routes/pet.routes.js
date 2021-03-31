const PetController = require("../controllers/pet.controller");

module.exports = app => {
  //c
  app.post("/api/pets/new", PetController.createNewPet);
  //r
  app.get("/api/pets/", PetController.findAllPets);
  app.get("/api/pets/:id", PetController.findOneSinglePet);
  //u
  app.put("/api/pets/update/:id", PetController.updateExistingPet);
  //d
  app.delete("/api/pets/delete/:id", PetController.deletePet);
};