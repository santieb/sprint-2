let movie = document.getElementById('movie');
let searchBtn = document.getElementById('searchBtn');
let image = document.getElementById('image');
let title= document.getElementById('title');
let description = document.getElementById('description');

const apikey = `7fb789f2`;

movie.value = ""

async function getMovie(title) {


  try{
    let url = `https://omdbapi.com/?apikey=${apikey}&t=${title}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.Title)
    return data;
  }
  catch(error) {
    console.log(error)
  }

};


searchBtn.addEventListener("click", () => {
  
  let movie = movie.value
  getMovie(movie)

});


  
