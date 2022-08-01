const express = require("express");
const app = express()
const cors = require("cors");
const { request } = require("https");
const { response } = require("express");

app.use(express.json())
app.use(cors())

// app.get
// app.post
// app.put
// app.delete
// app.get(route, function)
const magic_set = [
    { id: 1, set_name: "KTK"},
    {id: 2, set_name: "2X2"}
]

app.get("/", (req, res) =>{
    res.send("Hello World")
})


app.post("/", (req, res) =>{
    // const set_to_add = {
    //     id: magic_set.length +1,
    //     set_name: request 
    // }
    magic_set.push(request.body)
    response.json()({message: "ok"})
})
app.put("")

app.listen( 8000, () => {
    console.log("LIVE")
} )