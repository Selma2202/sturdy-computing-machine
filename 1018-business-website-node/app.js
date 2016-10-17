const express = require ( 'express')
const app = express ()

console.log('Starting app')

app.use(express.static('static/Jimmy-Selma-Coffee-Adventure'))

app.listen (3000, ()=>{
	console.log('Express listening')
})