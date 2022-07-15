let password = "staraptor15"
let hasNumber = /\d/
let hasletter = /[a-zA-Z]/g

if (password.length<10){
    console.log("failure")
}
else if (hasNumber.test(password) == false){
    console.log("failure")
}
else if (hasletter.test(password) == false){
    console.log("failure")
}
//These are the additional checks. 1: If it's too long(more than 20 chars). 2: If the password is equal to some forbidden ones.
else if (password.length>20){
    console.log("failure")
}
else if (password == "password123"||password == "letmein123"){
    console.log("failure")
}
else{
    console.log('success!')
}


