const express = require ( 'express')//import express module
const app = express ()

app.use(express.static('static/Jimmy-Selma-Coffee-Adventure'))//put the whole folder in the static folder, so that had to be included in the path

app.listen (3000, ()=>{//hosts it on localhost:3000
	console.log("This app is running on localhost:3000")
})