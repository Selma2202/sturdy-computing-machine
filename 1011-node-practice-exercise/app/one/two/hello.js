var greetWorld = function () {
	console.log ("Hello world!")
}

var invisible = function () {
	console.log ("blabla")
}

module.exports = greetWorld //only greetWorld is being exported; this chooses what is being exported
module.exports = invisible //if you have more module.exports, only the last one is being exported
//if you want more exports, you make an object
module.exports = {
	sayHello: greetWorld, //references the functions above
	notseen: invisible
}