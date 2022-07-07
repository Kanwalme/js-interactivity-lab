
let message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefailt();
  let inputField= document.querySelector('input')
  const movie = document.createElement("li");


  const movieTitle = document.createElement('span')
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie)
  movie.appendChild(movieTitle)
  
  
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent="x"
  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)
  
  const list = document.querySelector('ul')
  list.appendChild(movie)
  inputField.value="";
}
document.querySelector("form").addEventListener("submit", addMovie)


function deleteMovie(event){
event.target.parentNode.remove()
message.textContent= 'Movie Deleted'
}

function crossOffMovie (event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')===true) {
        message.textContent = "Movie watched!"
    }else{
        message.textContent= "movie added back!"
    }
}