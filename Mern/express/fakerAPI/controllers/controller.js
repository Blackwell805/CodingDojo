const User = require('..models/model');

module.exports = {
    createThing: (req,res) => {
        res.json(req.body);
    },
    getThing: (req,res) => {
        let something = new User();
        res.json(something);
    }
}