const { json } = require("express");

let searchInput = document.getElementById('search');
let searchButton = document.getElementById('searchBtn');
let result = document.getElementById('result');

const apikey = `7fb789f2`;
const theMovie = `the%20forever%20purge`;

async function getMovie(title) {
  let url = `https://omdbapi.com/?apikey=${apikey}&t=${title}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(json)
  return data;
};

let movie = getMovie(theMovie)
.then(response => console.log(response))
.catch(error => console.log(error));

let info = movie(movie323);
info.then(response => {
    console.log("hoasmcoa")
  })


  
searchButton.addEventListener('click', () => {
    let movie = searchInput.value;
    search(movie);
    console.log(movie);
});
  
