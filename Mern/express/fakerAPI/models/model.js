const faker = require('faker');

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.firstName();
        this.lastName = faker.lastName();
        this.phoneNumber = faker.phoneNumber();
        this.email = faker.email();
        this.password = faker.password();
    }
}

class Company {
    constructor() {
        this.id = faker.random.uuid();
        this.name = faker.name();
        this.address = faker.address({
            street: faker.street,
            city: faker.city,
            state: faker.state,
            zipCode: faker.zipCode,
            country: faker.country,
        });
    }
}

module.exports = User, Company