console.log("Hello world")
let message = document.querySelector("#message")




let addMovie = (event) =>{
    event.preventDefault()
    let inputfield = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputfield.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    document.querySelector("ul").appendChild(movie)
    inputfield = ""
    movie.appendChild(deleteBtn)
    
}

let deleteMovie = (event) =>{
    event.target.parentNode.remove()
    message1 = (`${event.target.parentNode.textContent} has been deleted`)
    message.textContent = message1.replace('X', '')
    revealMessage()
}


document.querySelector("form").addEventListener("submit", addMovie)

let crossOffMovie = (event) =>{
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent = (`${event.target.textContent} watched`)
    }
    else{
        message.textContent = (`${event.target.textContent} added`)
    }
    revealMessage()
}


let revealMessage = () =>{

    message.classList.remove("hide")
   
    setTimeout(()=>message.classList.add("hide"), 1000)
}
