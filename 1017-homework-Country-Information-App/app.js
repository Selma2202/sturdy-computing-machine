//////////// Country Information App

// Create a separate module for reading and parsing the JSON file, named "json-file-reader".
// This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// Takes in one parameter from the command line, the name of a country. 
// Outputs information (country, topleveldomain) about that specific country. 

// Addition: Jimmy and I made the comparison such that the input (both for strings with one word or multiple words) is case insensitive.


var fs = require ("fs") //standaard openen met: 
var parsedCountries = require( __dirname + '/json-file-reader' ) //call upon json-file-reader.js module

parsedCountries( process.argv[2] )//takes the third word/string from the command line as a parameter in json-file-reader.js