const mongoose = require('./connection');

const plateModel= {
    plate: String,
    price: Number,
    typeOfPlate: String
}

const plate = mongoose.model('plates', plateModel);

module.exports = plate;
