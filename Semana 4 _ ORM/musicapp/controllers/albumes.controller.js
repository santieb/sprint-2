require("dotenv").config();
const Sequelize = require('sequelize');
const connection = require("../config/db.config");
const albumModel = require('../models/albumes.model')(connection, Sequelize);

const createAlbum = async (req) => {
  const newAlbum = await albumModel.build({
    nombre_album: req.body.nombre_album,
    banda: req.body.banda,
    fecha_publicacion: new Date()
  });

  const result = await newAlbum.save();
  return result;
}

const listAlbum = async () => await albumModel.findAll();

const updateAlbum = async (req) => {
  const idAlbum = parseInt(req.params.id);
  const result = await albumModel.update({
    nombre_album: req.body.nombre_album,
    banda: req.body.banda,
    fecha_publicacion: new Date()
    },
    { where: { id_album: idAlbum } }
  );
  return result;
}

const deleteAlbum = async (req) => {
  const idAlbum = req.params.id;
  const result = await albumModel.destroy({
    where: { id_album: idAlbum }
  });
  return result;
}

const listAlbumById = async (req) => {
  const albumId = req.params.id;
  const result = await albumModel.findOne({ id: albumId });
  console.log(result);
  return result;
}

module.exports = {
  createAlbum,
  listAlbum,
  updateAlbum,
  deleteAlbum,
  listAlbumById
}
