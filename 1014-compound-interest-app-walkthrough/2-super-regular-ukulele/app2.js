"use strict" //anders leest ie niet in terminal de nieuwe termen

// importing necessary modules
const fs = require ( "fs")
const interestCalculator2 = require ( __dirname + "/interest-calculator2" )
// const is a var that is not supposed to change throughout the file


interestCalculator2( process.argv ) 

