// Part 2

//CHECK// For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

//standaard openen met:
var fs = require ("fs")

function countryParser (countryName){
	fs.readFile(__dirname + "/countries.json", "utf8", function(err, data) {
		if (err) throw err;


		var parsedData = JSON.parse(data)
			// console.log(data)

			for (var i = 0; i < parsedData.length; i++) {//dit moest kleiner zijn, en niet kleiner of gelijk aan. weet nog niet waarom.
				// var landObject = parsedData[i]
				if (parsedData[i].name == countryName) {
		// return (i)
		//console.log (i)
		console.log ("Country: " + parsedData[i].name)
		console.log ("Top Level Domain: " + parsedData[i].topLevelDomain)
	}
}
})
}


//countryParser ("Madagascar")
// countryParser ("Vietnam")

module.exports = countryParser


//deze gebruiken?
// for (var i = 0; i <= data.length; i++) {
// 				if (countryName in data) {
// 		//return (i)
// 		console.log (i)
// 	}

// //of deze misschien?
// for (countryName in data) {
//     //xxx
// }

// doorzoek het bestand op <countryname>
// geef ons het objectnummer waar <countryname> in voorkomt
// voor dit objectnummer, geef ons ook topLevelDomain

// for-loop die de hele tijd loopt en telt op welk object we zitten
// if-loop die stopt zodra we bij het juiste land zijn
// 	we hebben dan dus het objectnummer, en kunnen daarmee ook de topLevelDomain eruit halen

//--------------------------------------------------------------



// }

// module.exports = countryParser

// function findThingInObject (enterObject){

// 	}








			// var whichCountry = JSON.parse(process.argv[2])
			// console.log("Country: " + whichCountry);
			// console.log("Top Level Domain: " + whichCountry.topLevelDomain)