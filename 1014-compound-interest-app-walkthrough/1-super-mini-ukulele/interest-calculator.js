"use strict" //anders leest ie niet in terminal de nieuwe termen

// importing necessary modules
const fs = require ( "fs")




//put everything needed to export in a function so it can get exported?
let interestCalculator = () => {


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
fs.readFile( __dirname + "/customer.json", "utf-8", ( err, data ) => {//new kind of function writing
//Parse the file to a readable object
let parsedData = JSON.parse(data)//let new datatype instead of var
//console.log (parsedData)
calcCompound ( parsedData )
} )

// Function to calculate compound interest from a customer object
let calcCompound = ( customer ) => {
	// Set end amount prop and calculate total duration
	customer.pension.endamount = {
		pessimistic: 	customer.finances.startcapital,
		average: 		customer.finances.startcapital,
		optimistic: 	customer.finances.startcapital
	}
	customer.pension.duration = (customer.pension.age - customer.age)

	// Do the interest math
	for (var i = customer.pension.duration - 1; i >= 0; i--) {//dit is the improved native for loop, efficienter omdat ie niet telkens een external object moet aanspreken om te checken of het nog moet blijven loopen.
		//console.log ( "I looped " + i + " times")//dit is om te checken of de loop werkt

		//Add monthly spend to all the scenarios
		customer.pension.endamount.pessimistic 	+= (customer.finances.monthlyadd * 12 )
		customer.pension.endamount.average 		+= (customer.finances.monthlyadd * 12 )
		customer.pension.endamount.optimistic 	+= (customer.finances.monthlyadd * 12 )

		//Calculate the added interest
		customer.pension.endamount.pessimistic 	*= customer.pension.interest.pessimistic
		customer.pension.endamount.average 		*= customer.pension.interest.average
		customer.pension.endamount.optimistic 	*= customer.pension.interest.optimistic
	}
	//Welcome customer
	console.log ("Welcome " + customer.name + " to our pension planner!")
	console.log ("You are starting with " + customer.finances.startcapital + " and add a monthly amount of " + customer.finances.monthlyadd)
	console.log ("When you retire at age " + customer.pension.age + " you will have the following:")
	//Output data
	console.log ("In a pessimistic scenario: €" 	+ prettyNr(customer.pension.endamount.pessimistic))
	console.log ("In a average scenario: €" 		+ prettyNr(customer.pension.endamount.average))
	console.log ("In a optimistic scenario: €" 		+ prettyNr(customer.pension.endamount.optimistic))
}
}

module.exports = interestCalculator