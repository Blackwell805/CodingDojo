const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timestamps: true});
module.exports.Product=mongoose.model('Product', ProductSchema);


// const mongoose = require('mongoose');
// const PersonSchema = new mongoose.Schema({
//     firstName: { type: String },
//     lastName: { type: String }
// }, { timestamps: true });
// module.exports.Person = mongoose.model('Person', PersonSchema);
