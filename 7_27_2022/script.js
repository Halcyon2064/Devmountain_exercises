
// console.log(document.firstElementChild)

let title = document.querySelector("h1")
console.log(title)
title.style.color = "red"
title.innerHTML = "Not morb"

let lists = document.querySelectorAll("li")
console.log(lists)

document.querySelector("input").click()

//alert when you load

// alert("Annoy")
// confirm("Am I annoying you?")
// prompt("ANSWER")

let button = document.querySelector("button")

let clicker = (event) =>{
    console.log(event)
}

button.addEventListener( "click", clicker)