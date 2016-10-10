//setup project
//read files from the directory
//use that information to print out the files

var fs = require ("fs")

fs.readdir(__dirname, function(err, files){
	if (err) throw err;
	// console.log(files)

	for (var i = 0; i < files.length; i++) {

		fs.readFile(files[i], "utf8", function(err, data) {
			if (err) throw err;
			console.log(data);
		})
	}

})


// for (var i = Things.length - 1; i >= 0; i--) {
// 	Things[i]
// }



// fs.readFile(files[i], "utf8", function(err, data) {
// 	if (err) throw err;
// 	console.log(data);
// })


// fs.readFile(__dirname + "fs.readdir"[1], "utf8", function(err, data) {
// 	if (err) throw err;
// 	console.log(data);
// })