const express = require ( 'express')
const app = express ()

console.log('Starting app')

app.use('/resources', express.static('static'))//for your static files?

app.get('/ping', (req,res) => {
	console.log('Someone opened the main page')
	res.send( 'pong')
})

app.get('/home', (req, res) => { //hiermee stuur je een specific file naar http://localhost:8000/home
	res.sendFile (__dirname + '/static/index.html' )
})

app.listen (8000, ()=>{
	console.log('Express listening')
})