//This is giving us the ability to make the server. This is IMPORTING express
const express = require("express");
//this makes the server itself
const app = express();

//We have to import Faker from 'faker'
const faker = require('faker');
// const User = require("../express/fakerAPI/models/model");

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.listen(8000, () =>
  console.log(`Server is locked and loaded on port 8000!`)
);

//this is going to take two parameters. First will be the url (url.py in Django. Second will be the "function" that takes in two parameters, (request,response)).
app.get('/api/users/new', (req, res) => {
  res.json(new User());
});

  app.get('/api/companies/new', (req, res) => {
    //this res means response. "How do you want to receive this?" is the thinking behind it. It could be sent via send, JSON, HTML, JavaScript etc. 
    res.json(new Company());
  });

  app.get('/api/user/company', (req, res) => {
    const both = { "user": new User(), "company": new Company() };
    res.json(both);
  });




//Be sure you dot walk properly. Refer to the API for proper dictionary JSON location.
  class User {
    constructor() {
      this._id = faker.random.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
  };
  console.log(new User());

  class Company {
    constructor() {
      this.id = faker.random.uuid();
      this.name = faker.company.companyName();
      //When it comes to objects, be sure to put them into key:value pair relationship.
      this.address = {
        'street': faker.address.streetName(),
        'city': faker.address.city(),
        'state': faker.address.state(),
        'zipCode': faker.address.zipCode(),
        'country': faker.address.country(),
      };
    }
  };
  console.log(new Company());