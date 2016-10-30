'use strict' //making sure new terms are readable

//including necessary modules and setting up of the file
const express = require ('express')
const fs = require ('fs')
const bodyParser = require('body-parser') //al in twee tutorials gezien dat het gebruikt wordt, dus gebruiken
const app = express ()

//this one is generally used, not the json one (for full disclosure left at bottom document)
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(__dirname + "/static"))

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
				if(req.body.searchbar.toLowerCase() == parsedData[i].firstName.toLowerCase() 
					|| req.body.searchbar.toLowerCase() == parsedData[i].lastName.toLowerCase() 
					|| req.body.searchbar.toLowerCase() == parsedData[i].firstName.toLowerCase() + " " + parsedData[i].lastName.toLowerCase() + ": " + parsedData[i].email.toLowerCase()
				|| req.body.searchbar.toLowerCase() == parsedData[i].firstName.toLowerCase() + ' ' + parsedData[i].lastName.toLowerCase()){//will only look for when input matches first- OR last-name

					//when a match occurs, it will retrieve all data for this loopnumber and push it into the empty array.
				resultArray.push('User ' + (i+1) + ':', 'First name: ' + parsedData[i].firstName, 'Last name: ' + parsedData[i].lastName, 'E-mail: ' + parsedData[i].email, '~~~~~~~~~~')
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

// route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. Once that is complete, redirects to the route that displays all your users (from part 0).

app.post ('/adduser', (req, resp) => {
	//console.log('debugging 1')

	fs.readFile( __dirname + '/data.json', 'utf8', (error, data) => {
		if (error) throw error

			console.log(data)
			let parsedData = JSON.parse(data)//parse data so there can be objects added to the data
			console.log(parsedData)//shows in the console the data without the new object

			parsedData.push({"firstName": req.body.firstName, "lastName": req.body.lastName, "email": req.body.email})

			console.log(parsedData) //YES OMG HET NIEUWE OBJECT KOMT ERIN TE STAAN (shows in the console the data with the new object)

			fs.writeFile(__dirname + '/data.json', JSON.stringify(parsedData, null, '\t'), (err) => {//by inserting the stringify in the spot where normally the data would be, it will immediately take the right data. Together with writefile, this will save the data to the new (replaced) json file data.json
				if (err) throw err;
				console.log('It\'s saved!');//informative for terminal readers
			});

			resp.redirect('allusers')//it does not first have to parse the new written data again, since only one item was added.
		})
})


//AJAX OPDRACHTTTTT

app.post('/ajax1', (req, res)=>{

	var inputLetter = req.body.userInput

	fs.readFile( __dirname + '/data.json', (error, data) => {
		if (error) throw error

		let resultArray = [];//empty array to fill with results matching the inputted letter, to return and display results in the browser.
		let parsedData = JSON.parse(data)
		//DITWERKTconsole.log(JSON.stringify(parsedData[1]) + '111111')

		//controleren voor elke letter(combinatie) of deze in een string uit parsedData voorkomt, namelijk als deze niet gelijk is aan -1
		for (var i = 0; i < parsedData.length; i++) {
			if ((parsedData[i].firstName.toLowerCase().indexOf(inputLetter.toLowerCase()) !== -1)  
			|| (parsedData[i].lastName.toLowerCase().indexOf(inputLetter.toLowerCase()) !== -1)) {

				resultArray.push(parsedData[i])
			}
		}
		console.log(resultArray)

		//HET TERUGSTUREN VAN DE VERKEREGEN DATA
		res.send(resultArray) 
	})
})

//what localhost can this app be found
app.listen (8000, () => {
	console.log('We are listening on port 8000')
})









//Old code

// app.use( bodyParser() );       // to support JSON-encoded bodies
//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies

//When in route 3, I first wanted to make sure I could print to the console:
					//console.log("First name: " + parsedData[i].firstName)
					//console.log("Last name: " + parsedData[i].lastName)
					//console.log("E-mail: " + parsedData[i].email + "\n")


//When in route 5, i wanted to push to the 'array' of json:
//data.push({"firstName": req.body.firstName, "lastName": req.body.lastName, "email": req.body.email})

//When in route 5, i wanted to create a new object to push as a whole:
// let newUser = 
			// {"firstName": "",
			// "lastName": "",
			// "email": ""} //object al ingevuld maar met lege values om in te kunnen pushen? Maar dan zit je met een naam-object, en de rest van de objecten zijn naamloos.
			// 	console.log(newUser)
			// newUser.firstName=req.body.firstName // moet naar object newUser
			// newUser.lastName=req.body.lastName //moet naar object newUser
			// newUser.email=req.body.email // moet naar object newUser
			// console.log(newUser)

//Usefull youtube and webpages
//https://www.youtube.com/watch?v=leilVbK0xQc --> on adding forms, links
//http://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters-in-express --> on body parsing
//https://www.youtube.com/watch?v=vKlybue_yMQ --> on body parsing, doing something with the input of the form
//http://stackoverflow.com/questions/18884840/adding-a-new-array-element-to-a-json-object --> on why to parse a file before being able to edit it (i thought simply pushing into the json array would do; not possible)
