require("dotenv").config();
const Sequelize = require('sequelize');
const connection = require("../config/db.config");
const bandModel = require('../models/bandas.model')(connection, Sequelize);

const createBand = async (req) => {
  const newBand = await bandModel.build({
    nombre_banda: req.body.nombre_banda,
    integrantes: req.body.integrantes,
    fecha_inicio: new Date(),
    fecha_separacion: null,
    pais: req.body.pais
  });

  const result = await newBand.save();
  return result;
}

const listBand = async () => await bandModel.findAll();

const updateBand = async (req) => {
  const id_band = parseInt(req.params.id);
  const result = await bandModel.update({
    nombre_banda: req.body.nombre_banda,
    integrantes: req.body.integrantes,
    fecha_inicio: req.body.fecha_inicio,
    fecha_separacion: req.body.fecha_separacion,
    pais: req.body.pais
    },
    { where: { id_banda: id_band } }
  );
  return result;
}

const deleteBand = async (req) => {
  const bandId = req.params.id;
  const result = await bandModel.destroy({
    where: { id_banda: bandId }
  });
  return result;
}

const listBandById = async (req) => {
  const bandId = req.params.id;
  const result = await bandModel.findOne({ id: bandId });
  return result;
}

module.exports = {
  createBand,
  listBand,
  updateBand,
  deleteBand,
  listBandById
}
