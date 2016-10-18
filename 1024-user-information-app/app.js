'use strict' //making sure new terms are readable

//Usefull youtube and webpages
//https://www.youtube.com/watch?v=leilVbK0xQc
//http://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters-in-express
//https://www.youtube.com/watch?v=vKlybue_yMQ

//including necessary modules and setting up of the file
const express = require ('express')
const fs = require ('fs')
const bodyParser = require('body-parser') //al in twee tutorials gezien dat het gebruikt wordt, dus gebruiken
const app = express ()

//this one is generally used, not the json one (for full disclosure left at bottom document)
app.use(bodyParser.urlencoded({extended: true})); 

app.set ('view engine', 'pug')
app.set ('views', __dirname + '/views')


//route 1: renders a page that displays all your users.
app.get ('/allusers', (request, response) => {
	fs.readFile( __dirname + '/data.json', (error, data) => {
		if (error) throw error

		let parsedData = JSON.parse(data)
		console.log('\nAll users will now be displayed in the browser')//informative for terminal-readers
		response.render('allusers', {data: parsedData})//sends the parsedData to the webpage of allusers
	})
})

//route 2: renders a page that displays a form which is your search bar.
app.get ('/search', (request, response) => {
	response.render('search')//makes the page exist, in the file itself a search bar is created.
})
// })


//route 3: takes in the post request from your form, then displays matching users on a new page. Users should be matched based on whether either their first or last name contains the input string.


app.post('/search', (req, resp) => {
	// resp.end(JSON.stringify(req.body));

	
	fs.readFile( __dirname + '/data.json', (error, data) => {
		if (error) throw error

			let resultArray = [];//empty array to fill with search results later on, so it can be used by returnuser-file to display results in the browser
			
			let parsedData = JSON.parse(data)
			console.log("\nSearch results will now be displayed in the browser")//informative for terminal readers.
			for (let i = 0; i < parsedData.length; i++) {//loops through all objects
				if(req.body.searchbar == parsedData[i].firstName || req.body.searchbar == parsedData[i].lastName){//will only look for when input matches first- OR last-name

					//console.log("First name: " + parsedData[i].firstName)
					//console.log("Last name: " + parsedData[i].lastName)
					//console.log("E-mail: " + parsedData[i].email + "\n")

					//when a match occurs, it will retrieve all data for this loopnumber and push it into the empty array.
					resultArray.push(parsedData[i].firstName, parsedData[i].lastName, parsedData[i].email)
				}
			}
			//console.log (resultArray)
			resp.render('returnuser', {data: resultArray})
		})
})

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




//Old code

// app.use( bodyParser() );       // to support JSON-encoded bodies
//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies