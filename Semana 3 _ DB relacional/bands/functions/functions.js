require("dotenv").config();
const Sequelize = require('sequelize');
const connection = require("../config/db.config");
const bandsModel = require("../models/bands")(connection, Sequelize);


const list = async () => await bandsModel.findAll();

module.exports = {
    list,
}