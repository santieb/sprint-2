const express = require('express');
const app = express();
const functions = require('./functions')
    
const port = 3000;
const host = 'http://localhost';
const url = `${host}:${port}`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const dishExists = (req, res, next) => {
    functions.plateExists(req.params.id)
    .then((result) => result ? next() : res.status(404).send('Dish not found'))
    .catch(() => res.status(404).json('Dish not found'));
  }
  
  app.get('/get', function (req, res) {
    functions.listPlates()
    .then(dishes => res.json(dishes))
    .catch(err => res.json(err));
  });
  
  app.get('/find/:id', dishExists, function (req, res) {
    functions.getPlateById(req.params.id)
    .then(dishes => res.json(dishes))
    .catch(err => res.json(err));
  });
  
  app.post('/post', function (req, res) {
    functions.createPlate(req.body)
    .then(dish => res.json(dish))
    .catch(err => res.json(err));
  });
  
  app.put('/update/:id', dishExists, function (req, res) {
    functions.updatePlate(req.params.id, req.body)
    .then(dish => res.json(dish))
    .catch(err => res.json(err));
  });
  
  app.delete('/delete/:id', dishExists, function (req, res) {
    functions.deletePlate(req.params.id)
    .then(dish => res.json(dish))
    .catch(err => res.json(err));
  });
  




app.listen(port, () => {
    console.log(`Servidor iniciado en ${url}`);
});
