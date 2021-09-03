const express = require('express');
const app = express();
import fetch from 'node-fetch';
const APIkey = 'c1513656743583242e0f3d410e330fa7';
const ciudades = ["Roma", "Paris,", "Tokyo", "Moscu", "Chicago", "Boston", "Madrid", "London", "Lima", "BuenosAires"]

api = 'https://api.openweathermap.org/data/2.5/weather?q='

const cuidadRandom = () => {
    return ciudades[Math.floor(Math.random()*ciudades.length)];
}

const ciudades3 = [
  {ciudad: cuidadRandom(),
  }, 
  {ciudad: cuidadRandom(),
  }, 
  {ciudad: cuidadRandom(),
  }];

count = 0
const agregarTemp = (temp) => {
  
  ciudades3[count].temperatura = temp
  count++
}

async function clima () {
    
  for(i=0;i<3;i++){
    ciudad = ciudades3[i].ciudad
    ciudadAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}`

    const response = await fetch(url);
    const info = await response.json();

    console.log(info)
  };
}
  
clima();

const port = 3000

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

