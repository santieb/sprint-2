const express = require('express')
const app = express()
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis);
const client = redis.createClient();
const port = 3050;

const plate = require('../Semana 2 _ Arquitectura/restaurant/plateModel')

client.on('error', function(error) {
    consol.log(error);
})
   
const middleware = async (req, res, next) => {
    const platesOnRedis = await client.getAsync('plates');
    platesOnRedis !== null ? res.json(JSON.parse(platesOnRedis)) : next();
}

app.get('/products/', middleware, async (req, res) => {
    const plates = await plate.find();
    client.set('plates', JSON.stringify(plates), 'EX', 60*60*24);
    res.send(plates);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})