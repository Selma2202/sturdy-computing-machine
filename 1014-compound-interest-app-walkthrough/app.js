"use strict" //anders leest ie niet in terminal de nieuwe termen

// importing necessary modules
const fs = require ( "fs")
// const is a var that is not supposed to change throughout the file

// Read the customer data json
fs.readFile( __dirname + "/customer.json", "utf-8", ( err, data ) => {//new kind of function writing
//Parse the file to a readable object
let parsedData = JSON.parse(data)//let new datatype instead of var
//console.log (parsedData)
calcCompound ( parsedData )
} )

// Function to calculate compound interest from a customer object
var calcCompound = ( customer ) => {
	// Set end amount prop and calculate total duration
	customer.pension.endamount = {
		pessimistic: customer.finances.startcapital,
		average: customer.finances.startcapital,
		optimistic: customer.finances.startcapital
	}
	customer.pension.duration = (customer.pension.age - customer.age)

	// Do the interest math
	for (var i = customer.pension.duration - 1; i >= 0; i--) {//dit is the improved native for loop, efficienter omdat ie niet telkens een external object moet aanspreken om te checken of het nog moet blijven loopen.
		//console.log ( "I looped " + i + " times")//dit is om te checken of de loop werkt

		//Add monthly spend to all the scenarios
		customer.pension.endamount += (customer.finances.monthlyadd * 12 )
		//customer.pension.endamount.pessimistic += (customer.finances.monthlyadd * 12 )
		customer.pension.endamount.average += (customer.finances.monthlyadd * 12 )
		customer.pension.endamount.optimistic += (customer.finances.monthlyadd * 12 )

		//Calculate the added interest
		customer.pension.endamount.pessimistic *= customer.pension.interest.pessimistic
		customer.pension.endamount.average *= customer.pension.interest.average
		customer.pension.endamount.optimistic *= customer.pension.interest.optimistic
	}
	//output our dwata
	console.log ("Welcome " + customer.name + " to our pension planner!")
	console.log ("You are starting with " + customer.finances.startcapital + " and add a monthly amount of " + customer.finances.monthlyadd)
	console.log ("When you retire at age " + customer.pension.age + " you will have the following:")
	console.log ("In a pessimistic scenario: €" + customer.pension.endamount.pessimistic)
	console.log ("In a average scenario: €" + customer.pension.endamount.average)
	console.log ("In a optimistic scenario: €" + customer.pension.endamount.optimistic)
}


// Old syntax
// fs.readFile( __dirname + "/customer.json", "utf-8", function ( err, data ) {

// } )

//geen comments in je json file:
// all datatypes are ok
// make sure keys are between aanhalingstekens too