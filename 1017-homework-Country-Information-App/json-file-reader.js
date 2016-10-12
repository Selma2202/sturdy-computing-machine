var fs = require ("fs") //standaard openen met:

function countryParser (filename, callback){ //countryname is the parameter that returns from the callback function.
	fs.readFile(filename, "utf8", function(err, data) {
		if (err) throw err;//error statement

		var parsedData = JSON.parse(data)//works as well by simply redefining data instead of making a new variable, but this worked better for readability purposes
		callback(parsedData)

	})
}

module.exports = countryParser

//////////// First we used this piece of code to make the input case insensitive and then set it back to the first letter capitalised, but this only worked on one-word-countries (as opposed to "Saint Kitts and Nevis"):
//
// countryName = countryName.toLowerCase()

// String.prototype.capitalizeFirstLetter = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
// countryName = countryName.capitalizeFirstLetter()


//////////// Personal stappenplan
// doorzoek het bestand op <countryname>
// geef ons het objectnummer waar <countryname> in voorkomt
// voor dit objectnummer, geef ons ook topLevelDomain

// for-loop die de hele tijd loopt en telt op welk object we zitten
// if-loop die stopt zodra we bij het juiste land zijn
// 	we hebben dan dus het objectnummer, en kunnen daarmee ook de topLevelDomain eruit halen