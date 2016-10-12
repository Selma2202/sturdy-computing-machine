//////////// Country Information App

// Create a separate module for reading and parsing the JSON file, named "json-file-reader".
// This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// Takes in one parameter from the command line, the name of a country. 
// Outputs information (country, topleveldomain) about that specific country. 

// Addition: Jimmy and I made the comparison such that the input (both for strings with one word or multiple words) is case insensitive.


var fs = require ("fs") //standaard openen met: 
var parsedCountries = require( __dirname + '/json-file-reader' ) //call upon json-file-reader.js module

var countryName = ( process.argv[2] ) //takes the third word/string from the command line as a parameter in json-file-reader.js

parsedCountries( __dirname + '/countries.json', function(data) {//only data in the callback-function, since this is the only thing returned by the other file

	for (var i = 0; i < data.length; i++) {//make sure to use "<" in stead of "<="
				if (data[i].name.toLowerCase() == countryName.toLowerCase()) {//to make input case insensitive
					console.log ("Country: " + data[i].name)
					console.log ("Top Level Domain: " + data[i].topLevelDomain)
				}
			}
		})
