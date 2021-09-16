const express = require('express')
const router = express.Router()
const mensajeController =  require('../controllers/mensajes.controller');

router.get('/', mensajeController.findAll);

router.post('/', mensajeController.create);

router.get('/:id', mensajeController.findById);

router.put('/:id', mensajeController.update);

router.delete('/:id', mensajeController.delete);

module.exports = router