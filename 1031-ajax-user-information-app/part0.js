// given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// example: for ['apple', 'orange', 'pineapple']
// 'orange' returns '1'
// 'durian' returns '-1'
// var valueFinder = (insertArray, value) => {
// 	for (var i = 0; i < insertArray.length; i++) {
// 		if (insertArray[i] == value){
// 			return i
// 		} else {
// 			return (-1)
// 		}
// 	}
// }
// var fruitArray = ['apple', 'orange', 'pineapple']
// var valueFinder = (fruitArray, 'orange')


var fruits = ['apple', 'orange', 'pineapple']
var fruitsString = 'apple orange pineapple'

// function valueFinder (insertArray, value) {
// 	for (var i = 0; i < insertArray.length; i++) {
// 		if (insertArray[i] == value){
// 			return i
// 		} else {
// 			return (-1)
// 		}
// 	}
// } 
// valueFinder (fruits, 'orange')//werkt niet, krijgt altijd -1

console.log(fruits.indexOf('orange'))
console.log(fruits.indexOf('apple'))
console.log(fruits.indexOf('pineapple'))
console.log(fruits.indexOf('mango'))
console.log(fruits.indexOf('r'))

console.log(fruitsString.indexOf('orange'))
console.log(fruitsString.indexOf('apple'))
console.log(fruitsString.indexOf('pineapple'))
console.log(fruitsString.indexOf('mango'))
console.log(fruitsString.indexOf('r'))

// now, write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
// 'orange' returns [1,2]

var sweets = ['chocolate', 'chips', 'candy', 'chocolate', 'marsbar', 'chocolate', 'cookie', 'cookie', 'twixbar']
var empty = []

function valueMaker (insertArray, value) {
	for (var i = 0; i < insertArray.length; i++) {
		if ((insertArray[i]) == value) {
			empty.push(i)
		}
	}
	if (empty.length == 0) {
		return -1
	} else {
		return (empty)
	}
}

valueMaker (sweets, 'chocolate')
valueMaker (sweets, 'apple')
valueMaker (sweets, 'cookie')