const content = document.getElementById("result");

const APIkey = 'c1513656743583242e0f3d410e330fa7';
const ciudades = ["Roma", "Paris,", "Tokyo", "Moscu", "Chicago", "Boston", "Madrid", "London", "Lima", "BuenosAires"]

const cuidadRandom = () => {
  return ciudades[Math.floor(Math.random()*ciudades.length)];
}

const ciudades3 = [
  {ciudad: cuidadRandom(),
   temp: "",
  }, 
  {ciudad: cuidadRandom(),
   temp: "",
  }, 
  {ciudad: cuidadRandom(),
   temp: "",
  }];

async function clima () {
    
  for(i=0;i<ciudades3.length;i++){

    ciudad = ciudades3[i].ciudad
    ciudadAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}`

    const response = await fetch(ciudadAPI);
    const info = await response.json();
    if (info.main.temp) ciudades3[i].temp = parseFloat(info.main.temp - 273.15).toFixed(2)
  }
}
clima ()
console.log(ciudades3)
