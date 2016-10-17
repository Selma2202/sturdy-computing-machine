const express = require ( "express" )
const app 	  = express ( )

app.get('/', (request, response) => {
  response.send("Hello Selma, It is pretty amazing to see you in the browser")
});

app.listen (2000, () => {
	console.log("I am listening")
})