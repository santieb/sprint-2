const mongoose = require('../restaurant/connection');
const { Schema } = mongoose;

const schemaUser = new Schema({
    name: String,
    lastname: String,
    mail: String,
    initialBalance: Number
});

const userModel = mongoose.model('users', schemaUser);

module.exports = userModel;