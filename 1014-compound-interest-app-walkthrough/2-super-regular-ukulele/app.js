"use strict" //anders leest ie niet in terminal de nieuwe termen

// importing necessary modules
const fs = require ( "fs")
const interestCalculator = require ( __dirname + "/interest-calculator")
// const is a var that is not supposed to change throughout the file


interestCalculator( process.argv ) 



// Old syntax
// fs.readFile( __dirname + "/customer.json", "utf-8", function ( err, data ) {

// } )

//geen comments in je json file:
// all datatypes are ok
// make sure keys are between aanhalingstekens too