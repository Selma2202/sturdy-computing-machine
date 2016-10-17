"use strict" //anders leest ie niet in terminal de nieuwe termen

// importing necessary modules
const fs = require ( "fs")




//put everything needed to export in a function so it can get exported?
let interestCalculator2 = () => {





// help function for later on
let roundDecimal 	= (number) => { 
	return Math.round (number * 100 ) / 100
}
let addCommas 		= ( number ) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let prettyNr 		= (number) => {
	return addCommas(roundDecimal (number))
}


// Read the customer data json
fs.readFile( __dirname + "/customers.json", "utf-8", ( err, data ) => {//new kind of function writing
//Parse the file to a readable object
let parsedData = JSON.parse(data)//let new datatype instead of var

//console.log (parsedData)
calcCompound ( parsedData )
//console.log (parsedData)

} )


// Function to calculate compound interest from a customer object
let calcCompound = ( customers ) => {

for (var x = customers.length - 1; x >= 0; x--) {

	// Set end amount prop and calculate total duration
	customers[x].pension.endamount = {
		pessimistic: 	customers[x].finances.startcapital,
		average: 		customers[x].finances.startcapital,
		optimistic: 	customers[x].finances.startcapital
	}
	customers[x].pension.duration = (customers[x].pension.age - customers[x].age)

	// Do the interest math
	for (var i = customers[x].pension.duration - 1; i >= 0; i--) {//dit is the improved native for loop, efficienter omdat ie niet telkens een external object moet aanspreken om te checken of het nog moet blijven loopen.
		//console.log ( "I looped " + i + " times")//dit is om te checken of de loop werkt

		//Add monthly spend to all the scenarios
		customers[x].pension.endamount.pessimistic 	+= (customers[x].finances.monthlyadd * 12 )
		customers[x].pension.endamount.average 		+= (customers[x].finances.monthlyadd * 12 )
		customers[x].pension.endamount.optimistic 	+= (customers[x].finances.monthlyadd * 12 )

		//Calculate the added interest
		customers[x].pension.endamount.pessimistic 	*= customers[x].pension.interest.pessimistic
		customers[x].pension.endamount.average 		*= customers[x].pension.interest.average
		customers[x].pension.endamount.optimistic 	*= customers[x].pension.interest.optimistic
	}
	//Welcome customer
	console.log ("\nWelcome " + customers[x].name + " to our pension planner!")
	console.log ("You are starting with " + customers[x].finances.startcapital + " and add a monthly amount of " + customers[x].finances.monthlyadd)
	console.log ("When you retire at age " + customers[x].pension.age + " you will have the following:")
	//Output data
	console.log ("In a pessimistic scenario: €" 	+ prettyNr(customers[x].pension.endamount.pessimistic))
	console.log ("In an average scenario: €" 		+ prettyNr(customers[x].pension.endamount.average))
	console.log ("In an optimistic scenario: €" 		+ prettyNr(customers[x].pension.endamount.optimistic))
}

}
}

module.exports = interestCalculator2