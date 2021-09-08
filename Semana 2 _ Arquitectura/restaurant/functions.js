const e = require('express');
const { response } = require('express');
const plate = require('./plateModel');
const plates = require('./plateModel');


const listPlates = async () => {
    let response;
    try {
        response = await plates.find();
    }catch(err) {
        response =  err;
    }
    return response;
} 


const createPlate = async (body) => {
    let response;
    try {
        const newPlate = await new plate(body);
        response = await newPlate.save();
    } catch(err) {
      response = await err;
    }
    return response;
}


const updatePlate = async (plateID, body) => {
    let response;
    try {
        response = await plate.findByIdAndUpdate(plateID, body);
    } catch(err) {
      response = await err;
    }
    return response;
}


const deletePlate = async (plateID) => {
    let response;
    try {
        response = await plate.findByIdAndDelete(plateID);
    } catch(err) {
      response = await err;
    }
    return response;
}

const findPlate = async (plateID) => {
    let response;
    try {
        response = await plate.findById(plateID);
    } catch(err) {
      response = await err;
    }
    return response;
}


const validatePlate = async (req, res, next) => {
    let response;
    try {
        response = await plate.exists({ _id: req.params.id });
        if(response) next()
    } catch(err) {
      response = await err;
    }
    res.json(response)
}
          



module.exports = {
    listPlates,
    createPlate,
    deletePlate,
    updatePlate,
    findPlate,
    validatePlate,
}