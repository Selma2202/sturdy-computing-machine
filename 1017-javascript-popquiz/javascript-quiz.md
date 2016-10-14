Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, submit all of your answers in a file to canvas. This is so Lloyd and I can get a sense of your understanding.
- Finally, we will go over the answers in class. Write down your revised answer below your original answer.


---
### Part 1: Control Flow - 15 minutes

1. Write an if statement. Name each of the components and how they work together.

- From memory
if number > 1000 { //this is the first condition that is tried if it's met
console.log ("This number is huge")
} else if number > 100 { //this is the second ccondition that is tried if it's met
console.log ("This number is pretty big")
} else { //this is not a condition that is tried whether it's met, but will automatically execute when the two before are NOT met
console.log ("This number is small")
}

//these are test variables to take turns testing the if statement
var number = 12358 
var number = 334
var number = 11
var number = -134

- When using a .js file to autocomplete/check functions, loops and colors
I found I forgot to add brackets:
if (number > 1000) {
console.log ("This number is huge")
} else if (number > 100) {
console.log ("This number is pretty big")
} else {
console.log ("This number is small")
}


- After class discussion
//tba


2. Write a for loop. Describe each of its components. Indicate the order in which they are executed / evaluated.

- From memory
for (i=0, i < 10, i++) {
console.log ("I looped " + i + " times.")
}

i=0: starting situation. 
i<10: the condition
i++: what happens after the loop has been done.
So it adds one, does nothing with the starting situation, but checks again to see whether the condition is still being met. If so: loops again, adds 1, etc. When i has looped a number of times and is therefore up to a value of 10, the condition is not being met anymore, thus the loop stops executing. 

- When using a .js file to autocomplete/check functions, loops and colors
the forloop has to be separated by semicolons:
for (i=0; i < 10; i++) {
console.log ("I looped " + i + " times.")
}

- After class discussion
//tba


3. Functions
- 3a. Write a function. Describe each of its components and what each component does. Specify which of them are optional.

- From memory
function addNumbers (no1, no2) {
return no1 + no2
}

OR NOW ALSO POSSIBLE:
var addNumbers = (no1, no2) => {
return no1 + no2
}

//to test/execute the function, call the function and add the amount of parameters asked for
addNumbers (1, 9)
addNumbers (65465, 65465)


it starts with declaring a function (function)
then this function has a name (addNumbers), but functions can also be anonymous
the function executes within/consists of the code within curly brackets
in this case it returns the sum of two numbers, but it can also console.log, prompt, alert, or do something else with the result.

The new display of the function was only recently covered , but works the same, except generally only used for anonymous functions (i think). If you write a named function this way, you declare it a variable.


- After class discussion
//tba


- 3b. Write a function being called, showing the instruction execution order.

- From memory
I think I have include that in the example above.

- After class discussion
//tba



---
### Part 2: Data Types - 10 minutes

4. Primitive Data Types
- 4a. Give an example of an empty string and a non-empty string.
var emptyString = ""
var notEmptyString = "This is a stringy thingy"
- 4b. Give an example of a boolean.
true
false
- 4c. Give an example of a Number.
3 645516 -65654 65.165

5. Arrays
- 5a. Give an example of an empty array.
var emptArr = []
- 5b. Give an example of an array with three elements in it.
var fullName = ["Selma", "Heleen", "Dorrestein"]
//- 5c. How do you add another element to this array?
fullName.push.[van Luik]
console.log (fullName)
- 5d. How do you get the length of this array?
console.log (fullName.length)
- 5e. Show how to iterate through the array using a loop.
for (i=0; i < fullName.length; i++) {
console.log (fullName[i])
}


6. Objects
- 6e. Give an example of an empty object.
var emptyObject = {

}

- 6b. Give an example of an object with three keys and three values.
var me = {
firstName: Selma,
age: 25,
cat: Pinyin
}

- 6c. Give an example of an object with two keys and two functions as values.
var doingMath {
sums: (no1, no2) => {
return no1 + no2
}
multiply: (no1, no2) => {
return no1 * no2
}
}


- 6d. Describe one way of adding a key to an object.
me.push.address

- 6e. Describe the other way of adding a key to an object.
me.push["date of birth"]


- 6f. Explain the difference between these two ways, and when it is appropriate to use each way.
You usually use the first one, but you can use the last one if it consists of more then one word

- 6g. Describe how to iterate though an object using a loop.
for (i=0; i < me.length; i++) {
console.log (me[i])
}
maar volgens mij klopt dit niet

---
### Part 3: Algorithms - 20 minutes

7. What is an algorithm?
A formula to calculate something that you can use over and over again and for all kinds of different input?

8. For the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// Do not use the indexOf function.
// example: for ['apple', 'orange', 'pineapple']
// 'orange' returns '1'
// 'durian' returns '-1'
```

It is supposed to take in any array, so first we would need to find how many values are in the array. this can be achieved by a for loop.
Each time this for-loop runs, it needs to do a comparison to see whether the input meets the value that is at that point being accessed by the loop.
If so, it needs to return the location (i)
If not (=else), it needs to return -1
As you can see in my writing, this could be achieved by doing an if-else statement.

function matcher (insertArray, insertValue) {
	for (i=0; i<insertArray.length; i++) {
		if (insertArray[i] = insertValue) {
			return i
		} else {
			return -1
		}
	}
}

var fruits = ['apple', 'orange', 'orange', 'pineapple']

console.log matcher (fruits, orange)

//I feel like this doesn't work, but I hope I'm close.



9. Again, for the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
// 'orange' returns [1,2]
```

It is a function.
Once again, it needs to work for all arrays inputted, so it needs to have a for-loop that will work as long as the array is not finished yet.
Also it needs a if-statement that checks whether the looped value at that point is the same as the value inputted. 
In addition to the last loop, it needs to push those new locations into an empty array.


function arrayMaker (insertArray, insertValue) {
	var newArray = []
	for (i=0; i<insertArray.length; i++){
		if (insertArray[i] = insertValue) {
			newArray.push.i
		} else {
			return -1
		}
	}
	return newArray
}

var fruits = ['apple', 'orange', 'orange', 'pineapple']

matcher (fruits, 'orange')