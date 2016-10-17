"use strict" //anders leest ie niet in terminal de nieuwe termen

// importing necessary modules
const fs = require ( "fs")




//put everything needed to export in a function so it can get exported?
let interestCalculator2 = () => {

//for (var  = Things.length - 1; i >= 0; i--) {
//	Things[i]
//}

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

console.log (parsedData)
calcCompound ( parsedData )
console.log (parsedData)

} )


// Function to calculate compound interest from a customer object
let calcCompound = ( customers ) => {
	// Set end amount prop and calculate total duration
	customers.pension.endamount = {
		pessimistic: 	customers.finances.startcapital,
		average: 		customers.finances.startcapital,
		optimistic: 	customers.finances.startcapital
	}
	customers.pension.duration = (customers.pension.age - customers.age)

	// Do the interest math
	for (var i = customers.pension.duration - 1; i >= 0; i--) {//dit is the improved native for loop, efficienter omdat ie niet telkens een external object moet aanspreken om te checken of het nog moet blijven loopen.
		//console.log ( "I looped " + i + " times")//dit is om te checken of de loop werkt

		//Add monthly spend to all the scenarios
		customers.pension.endamount.pessimistic 	+= (customers.finances.monthlyadd * 12 )
		customers.pension.endamount.average 		+= (customers.finances.monthlyadd * 12 )
		customers.pension.endamount.optimistic 	+= (customers.finances.monthlyadd * 12 )

		//Calculate the added interest
		customers.pension.endamount.pessimistic 	*= customers.pension.interest.pessimistic
		customers.pension.endamount.average 		*= customers.pension.interest.average
		customers.pension.endamount.optimistic 	*= customers.pension.interest.optimistic
	}
	//Welcome customer
	console.log ("Welcome " + customers.name + " to our pension planner!")
	console.log ("You are starting with " + customers.finances.startcapital + " and add a monthly amount of " + customers.finances.monthlyadd)
	console.log ("When you retire at age " + customers.pension.age + " you will have the following:")
	//Output data
	console.log ("In a pessimistic scenario: €" 	+ prettyNr(customers.pension.endamount.pessimistic))
	console.log ("In a average scenario: €" 		+ prettyNr(customers.pension.endamount.average))
	console.log ("In a optimistic scenario: €" 		+ prettyNr(customers.pension.endamount.optimistic))
}
}

module.exports = interestCalculator2