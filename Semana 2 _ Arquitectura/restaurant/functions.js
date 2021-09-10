const express = require('express');
const plate = require('./plateModel');

const listPlates = async () => await plate.find();

const getPlateById = async (dishId) => await plate.findById(dishId);

const createPlate = async (dish) => {
    const newPlate = new plate(dish);
    const response = await newPlate.save();
    return response;
}
const updatePlate = async (dishId, dish) => await plate.findByIdAndUpdate(dishId, dish);

const deletePlate = async (dishId) => await plate.findByIdAndDelete(dishId);

const plateExists = async (dishId) => await plate.exists({ _id: dishId });

module.exports = {
    listPlates,
    getPlateById,
    createPlate,
    updatePlate,
    deletePlate,
    plateExists
}