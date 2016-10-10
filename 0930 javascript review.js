// write a function that takes in three parameters and returns the sum of those three parameters
function summify (a, b, c){
	return a + b + c
}

console.log (sumMaker(5, 2, 8)) //15
console.log (sumMaker(6545, 2312.51322, 213.12)) //9070.633


// given a string, create a function that returns the last character in that string.
var stillHelp = "I think I know what I'm doing..."
var stillPanicAttack = "Except not really"

function lastLetterString (insertStringHere){
	return insertStringHere.slice(-1); //a keyword I found by googling.
}

console.log (lastLetterString(stillHelp)) //.
console.log ("Expected value: .")
console.log (lastLetterString(stillPanicAttack)) //y
console.log ("Expected value: y")


// write a function that takes in one parameter and returns the cube of that parameter
// examples:
function cubify (input){
	return input * input * input
}

console.log (cubify (4)) //64
console.log ("Expected value: 64")
console.log (cubify (18)) //5832
console.log ("Expected value: 5832")


// define a function that takes in a string and reverses it. you are not allowed to call the "reverse" function (or any other string functions)
var maryPoppins = "supercalifragilisticexpialidocious"

function reversify (insertStringHere){
	var newArray = []//lege aray om alle letters in te plaatsen(push)
	var backwardsArray = []//lege array om de lege letters in te plaatsen (push)

	for(var i = 0; i<insertStringHere.length; i++){
		newArray.push (insertStringHere[i]) //om er in eerste instantie een array van te maken
	}
	for (var k = 1; k<=insertStringHere.length; k++){ //<= omdat zero-based is
		backwardsArray.push (newArray[insertStringHere.length-k]) //om de values van de array andersom te krijgen
	}
	return(backwardsArray.join(""))//om de array weer om te zetten tot een string
}

console.log (reversify(maryPoppins))
//OHMYGOD hier heb ik dus een week over gedaan. En het is me wel gelukt, en dat leverde echt een euforisch moment op, maar ik zou het nu niet kunnen herproduceren denk ik.
//Overigens kan deze misschien nog wel korter maar dan moet ik er morgen nog even naar kijken
//Jimmy: CharAt methode: leest een string als een soort array, scheelt twee loops.


// write a function that takes in two arrays of the same length as parameters. From those two arrays, create, then return an object which contains the elements of the first array as keys, and the elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }
var array1 = ['dit', 'moeilijker', 'je', 'zult']
var array2 = ['is', 'dan', 'misschien', 'denken']

function toObject(arr1,arr2) {
  var object = {};
  for (var i = 0; i < arr1.length; i++)
    object[arr1[i]] = arr2[i];
  return object;
}
toObject (array1,array2)



// Given an object with keys and values, create two arrays: one which contains the object's keys, and one which contains the object's values. Wrap this into a function which takes in one object that contains keys and values, and returns a different object that contains two keys. The first key should be named "keys" and will have the first array as a value. The second key should be named "values" and will have the second array as a value.

var selma = {
	land: "Nederland", 
	provincie: "Noord-Holland", 
	stad: "Amsterdam", 
	buurt: "De Baarsjes", 
	straat: "Adm de Ruijterweg", 
	verdieping: "kelder"
}

var keys = (Object.keys(selma)) //maakt een array van alle keys
// console.log (keys)
// var values = (Object.values(selma)) --> Console zegt dat dit geen bestaande functie is


//Moet nog aan de waardes zien te komen.

for(var key in selma) {
    var value = selma[key];
}

console.log (value)

function toArray (object) {
	var array [];
}

// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

// Deze kwam ik helaas niet helemaal uit. Morgen nog even naar kijken.



// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions


// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.