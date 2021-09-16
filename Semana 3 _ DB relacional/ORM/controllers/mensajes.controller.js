'use strict';
const Mensaje = require('../models/mensajes.model');

exports.findAll = function(req, res) {
  Mensaje.findAll(function(err, mensaje) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', mensaje);
  res.send(mensaje);
});
};

exports.create = function(req, res) {
const new_mensaje = new Mensaje(req.body);

if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Por favor envíe todos los campos requeridos' });
}else{
  Mensaje.create(new_mensaje, function(err, mensaje) {
  if (err)
  res.send(err);
  res.json({error:false, message:"Mensaje agregado correctamente !", data:mensaje});
});
}
};
exports.findById = function(req, res) {
  Mensaje.findById(req.params.id, function(err, mensaje) {
  if (err)
  res.send(err);
  res.json(mensaje);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor envíe todos los campos requeridos' });
  }else{
    Mensaje.update(req.params.id, new Mensaje(req.body), function(err, mensaje) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Mensaje actualizado correctamente' });
});
}
};

exports.delete = function(req, res) {
  Mensaje.delete( req.params.id, function(err, mensaje) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Mensaje borrado correctamente' });
});
};