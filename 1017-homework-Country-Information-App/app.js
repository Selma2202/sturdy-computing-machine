// Country Information App

// Part 1 Create a Node.js application that does the following:

// Takes in one parameter from the command line, the name of a country. 


// Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
// Outputs information about that specific country. Must be in the following format: Country: Top Level Domain:

//standaard openen met:
var fs = require ("fs")
var parsedCountries = require( __dirname + '/json-file-reader' )

console.log("Country: " + parsedCountries)

// standaard process.argv:
//var whichCountry = (process.argv[2])


// iets met parsen



// standaard readfile dingie:
fs.readFile(__dirname + "/countries.json", "utf8", function(err, data) {
			if (err) throw err;
			var whichCountry = JSON.parse(process.argv[2])
			console.log("Country: " + whichCountry);
			console.log("Top Level Domain: " + whichCountry.topLevelDomain)
		})

//Output informatie moet zijn:
// Country: <country name>
// Top Level Domain: <tld>

//leeg object?






// Part 2
// For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.
// Hints:

// Use JSON.parse (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse (Links to an external site.)) to parse JSON data from files into a JavaScript object.
// Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult.