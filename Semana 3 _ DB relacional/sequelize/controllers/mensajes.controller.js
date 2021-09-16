require("dotenv").config();
const Sequelize = require('sequelize');
const connection = require("../config/db.config");
const mensajeModel = require('../models/mensajes.model')(connection, Sequelize);

const createMessage = async (req) => {
  const mensajeDetails = await mensajeModel.build({
    texto_mensaje: req.body.texto_mensaje,
    fecha_mensaje: req.body.fecha_mensaje,
    id_usuario: req.body.id_usuario
  });

  const result = await mensajeDetails.save();
  return result;
}

const listMessage = async () => await mensajeModel.findAll();

const updateMessage = async (req) => {
  const id_msg = parseInt(req.params.id);

    const result = await mensajeModel.update(
      {
        texto_mensaje: req.body.texto_mensaje,
        fecha_mensaje: req.body.fecha_mensaje,
        id_usuario: req.body.id_usuario
      },
      { where: { id_mensaje: id_msg } }
    );
    return result;
}

const deleteMessage = async (req) => {
  const id_msg = req.params.id;
  const result = await mensajeModel.destroy({
    where: { id_mensaje: id_msg }
  });
  return result;
}

const listMessageByUserId = async (req) => {
  const id_user = req.params.id;
  const result = await mensajeModel.findAll({
    where: { id_usuario: id_user }
  });
  return result;
}

module.exports = {
  createMessage,
  listMessage,
  updateMessage,
  deleteMessage,
  listMessageByUserId
}
