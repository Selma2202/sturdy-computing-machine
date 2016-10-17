Assignments Mentor:

# Super mini ukulele
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

# SUPER MEGA UKULELE
- Make a 'customers' folder with 10 customer json files (e.g. mentor.json, paul.json etc). Make your app read all files in this directory and write the results of the pension calculations to a 'customerprojections.json' file as an array of result objects.
Hints: read folder, parse files, loop file and call calculations, save result variable to json file.

# KING BOB
- Make a generator that populates a process.argv[2] number of customer json files with random but reasonable data (meaning it could be real people you know, no trillionaires). Then use your super mega ukulele app to calculate their hypothetical pensions.

# Style bonus
- use arrow functions ()=>{}
- use not a single var statement
- elegantly store data in objects
- have as little code as possible in the main app.js