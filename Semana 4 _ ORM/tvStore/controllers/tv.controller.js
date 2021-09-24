require("dotenv").config();
const Sequelize = require("sequelize");
const connection = require("../config/db.config");
const televisorModel = require("../models/tv.model")(connection, Sequelize);
const modeloModel = require("../models/modelo.model")(connection, Sequelize);
const { Op } = require("sequelize");

const createTelevisor = async (req) => {
  const newTelevisor = await televisorModel.build({
    marca_televisor: req.body.marca_televisor,
    modelo_televisor: req.body.modelo_televisor,
    precio: req.body.precio,
    tamano_pantalla: req.body.tamano_pantalla,
    smart_tv: req.body.smart_tv,
  });

  const result = await newTelevisor.save();
  return result;
};

const listTelevisor = async () => await televisorModel.findAll();

const updateTelevisor = async (req) => {
  const televisorId = parseInt(req.params.id);
  const result = await televisorModel.update(
    {
      marca_televisor: req.body.marca_televisor,
      modelo_televisor: req.body.modelo_televisor,
      precio: req.body.precio,
      tamano_pantalla: req.body.tamano_pantalla,
      smart_tv: req.body.smart_tv,
    },
    { where: { id_televisor: televisorId } }
  );
  return result;
};

const deleteTelevisor = async (req) => {
  const televisorId = req.params.id;
  const result = await televisorModel.destroy({
    where: { id_televisor: televisorId },
  });
  return result;
};

const listTelevisorById = async (req) => {
  const televisorId = req.params.id;
  const result = await televisorModel.findOne({ id: televisorId });
  return result;
};

const listTelevisorByIdMarca = async (req) => {
  const marca = req.params.marca;
  const result = await modeloModel.findAll({
    where: {
      id_marca: marca,
    },
  });

  return result;
};

const listHighestPrice = async (req) => {
  const price = req.params.price;

  const result = await televisorModel.findAll({
    where: {
      precio: {
        [Op.gt]: price,
      },
    },
  });

  return result;
};

const listLowestPrice = async (req) => {
  const price = req.params.price;

  const result = await televisorModel.findAll({
    where: {
      precio: {
        [Op.lt]: price,
      },
    },
  });

  return result;
};

const orderByPrice = async () => await televisorModel.findAll({
  order: ['precio']
  });



module.exports = {
  createTelevisor,
  listTelevisor,
  updateTelevisor,
  deleteTelevisor,
  listTelevisorById,
  listTelevisorByIdMarca,
  listHighestPrice,
  listLowestPrice,
  orderByPrice,
};
