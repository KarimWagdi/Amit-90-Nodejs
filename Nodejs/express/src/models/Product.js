const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
    description: String,
    category: String,
    image: String,
    brand: String,
});

module.exports = mongoose.model('Product', productSchema);



