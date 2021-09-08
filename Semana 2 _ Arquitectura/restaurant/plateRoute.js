const express = require('express');
const app = express();
const functions = require('./functions')
    
const port = 3000;
const host = 'http://localhost';
const url = `${host}:${port}`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/get', (req, res) => {
    res.json(functions.listPlates())
});


app.get('/find/:id', functions.validatePlate, (req, res) => {
    res.json(functions.findPlate(req.params.id))
});


app.post('/post', (req, res) => {
    res.json(functions.createPlate(req.body))
});


app.put('/update/:id', functions.validatePlate, (req, res) => {
    res.json(functions.updatePlate(req.params.id, req.body))
});


app.delete('/delete/:id', functions.validatePlate, (req, res) => {
    res.json(functions.deletePlate(req.params.id))
});


app.listen(port, () => {
    console.log(`Servidor iniciado en ${url}`);
});
