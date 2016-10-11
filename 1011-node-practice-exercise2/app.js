var iets = process.env.APPLICATION_PORT
console.log(iets)
console.log("Ik kan ook zo de parameter uit die ene file plakken: " + process.env.APPLICATION_PORT)
console.log("put command line parameter here: " + process.argv[2]) //en dan moet je een woord in je terminal toevoegen, of een string en dan pakt ie er die bij