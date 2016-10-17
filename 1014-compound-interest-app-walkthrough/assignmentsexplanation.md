Assignments Mentor: 

<!-- # Super mini ukulele
- Modify the compound interest app to move the logic in a node module.
Hints: module.exports

Steps:
all functions and things used in the app-file are interdependant, so putting merely a part of that in a module, won't work. The whole thing can be in a new module. to make sure however it all gets exported, I can put it in a new function.


# Super regular ukulele
- Have a customers.json with an array of customer objects, then output all customer pension results to the terminal
Hints: [{},{},{}], for loop

Steps:
- make an array of multiple objects.
- leave the app as it is: all changes should be made in the module, since that's the functionality the app calls upon
- check module for the times we have called upon the data and see if it needs changing.
- it seems the module pretty much stays the same, except it has to happen x amount of times (as long as the array is long). In my case 5. When something needs to happen an x amount of time, we LOOP>
- I now managed to get it to work for just one customer. Everywhere where it says [0], it might need to happen an x amount of time. 
- So I need to get that part to loop.  -->

# SUPER MEGA UKULELE
- Make a 'customers' folder with 10 customer json files (e.g. mentor.json, paul.json etc). Make your app read all files in this directory and write the results of the pension calculations to a 'customerprojections.json' file as an array of result objects.
Hints: read folder, parse files, loop file and call calculations, save result variable to json file.

STEPS:
- make a customers folder
- make 10 customer json files
- make an app3.js
- make an interest-calculator3.js. it should include:
	- something to read the folder
	- something to parse the files
	- something to loop through files?
	- or something that creates one big file?
	- a variable 'result'
	- the variable 'result' should be saved in a json file? or exported to a json file?
NOTE AFTER MAKING THIS ASSIGNMENT
- the only thing that needed to be different in the end, was to use readdir and parse files, with which google helped. After that, I could just use the complete old code from Assignment1/2 combined. sweet.


<!-- # KING BOB
- Make a generator that populates a process.argv[2] number of customer json files with random but reasonable data (meaning it could be real people you know, no trillionaires). Then use your super mega ukulele app to calculate their hypothetical pensions.
 -->
# Style bonus
- use arrow functions ()=>{}
- use not a single var statement
- elegantly store data in objects
- have as little code as possible in the main app.js