require("dotenv").config();
const Sequelize = require('sequelize');
const connection = require("../config/db.config");
const songModel = require('../models/canciones.model')(connection, Sequelize);

const createSong = async (req) => {
  const newSong = await songModel.build({
    nombre_cancion: req.body.nombre_cancion,
    duracion_cancion: req.body.duracion_cancion,
    id_album: req.body.id_album,
    id_banda: req.body.id_banda,
    fecha_publicacion: new Date()
  });

  const result = await newSong.save();
  return result;
}

const listSong = async () => await songModel.findAll();

const updateSong = async (req) => {
  const songId = parseInt(req.params.id);
  const result = await songModel.update({
    nombre_cancion: req.body.nombre_cancion,
    duracion_cancion: req.body.duracion_cancion,
    id_album: req.body.id_album,
    id_banda: req.body.id_banda,
    fecha_publicacion: new Date()
    },
    { where: { id_cancion: songId } }
  );
  return result;
}

const deleteSong = async (req) => {
  const songId = req.params.id;
  const result = await songModel.destroy({
    where: { id_cancion: songId }
  });
  return result;
}

const listSongById = async (req) => {
  const songId = req.params.id;
  const result = await songModel.findOne({ id: songId });
  return result;
}

module.exports = {
  createSong,
  listSong,
  updateSong,
  deleteSong,
  listSongById
}
