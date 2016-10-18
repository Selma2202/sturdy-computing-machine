'use strict'

//including necessary modules
const express = require ('express')
const fs = require ('fs')
const app = express ()

app.set ('view engine', 'pug')
app.set ('views', __dirname + '/views')

//route 1: renders a page that displays all your users.
app.get ('/allusers', (request, response) => {
	fs.readFile( __dirname + '/data.json', (error, data) => {
		if (error) throw error

		let parsedData = JSON.parse(data)
		console.log(parsedData)
		response.render('allusers', {data: parsedData})
	})
})

//route 2: renders a page that displays a form which is your search bar.
app.get ('/search', (request, response) => {
	response.render('search')
	})
// })


//route 3: takes in the post request from your form, then displays matching users on a new page. Users should be matched based on whether either their first or last name contains the input string.



// app.post('/postquery', function(input, res) {
//   for (i = 0; i < state.length; i++){
//       queryResults.push(input);

//        if (state[i].name == input){
//          queryResults.push(input);
//        }        

// console.log('This is your input: %s',input);




// route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.
app.get ('/adduser', (request, response) => {
	response.render('adduser')
	})
// })


// route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. Once that is complete, redirects to the route that displays all your users (from part 0).


app.listen (8000, () => {
	console.log('We are listening on port 8000')
})


// Old example code
// app.get ('/ping', ( request, response) => {
// 	response.send ('Pong')
// })

