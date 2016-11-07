'use strict' //making sure new terms are readable

//including necessary modules and setting up of the file
const express = require ('express')
const app = express ()

app.set ('view engine', 'pug')
app.set ('views', __dirname + '/views')

app.use(express.static(__dirname + "/static"))


// app.use (express.static(__dirname + '/views'))

//Create an index landing page:
app.get ('/index', (request, response) => {
	response.render('index')
	console.log('\nThe browser will now display the homepage.')
})


//what localhost can this app be found
app.listen (8000, () => {
	console.log('We are listening on port 8000')
})