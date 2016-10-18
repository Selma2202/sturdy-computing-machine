'use strict'

//including necessary modules
const express = require ('express')
const fs = require ('fs')
const bodyParser = require('body-parser') //al in twee tutorials gezien dat het gebruik wordt, dus gebruiken
const app = express ()

// app.use( bodyParser() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies




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
//http://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters-in-express
//https://www.youtube.com/watch?v=vKlybue_yMQ

app.post('/search', (req, resp) => {
	// resp.end(JSON.stringify(req.body));

	
	fs.readFile( __dirname + '/data.json', (error, data) => {
		if (error) throw error

			let resultArray = [];
			
			let parsedData = JSON.parse(data)
			console.log("\nSearch results will now be displayed in the browser")
			for (var i = 0; i < parsedData.length; i++) {//make sure to use "<" in stead of "<="
				if(req.body.searchbar == parsedData[i].firstName || req.body.searchbar == parsedData[i].lastName){
					//console.log("First name: " + parsedData[i].firstName)
					//console.log("Last name: " + parsedData[i].lastName)
					//console.log("E-mail: " + parsedData[i].email + "\n")
					resultArray.push(parsedData[i].firstName, parsedData[i].lastName, parsedData[i].email)
				}
			}
			//console.log (resultArray)
			resp.render('returnuser', {data: resultArray})
		})
    //var firstName = req.body.firstName,
})
//bodyparser iets


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

