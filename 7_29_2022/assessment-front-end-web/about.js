console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted succesfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let buffduck = document.querySelector("img");

buffduck.addEventListener('mouseover', (evt)=>{
	evt.preventDefault()
	alert("You're as buff as this duck")
})