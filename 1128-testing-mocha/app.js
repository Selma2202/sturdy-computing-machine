'use strict'

const express = require ('express')
const app = express ()

app.get ('/', (req, res) => {
	res.status(200).send ('I work!')
})

app.listen (3000, app => {
	console.log ('server running')
})

module.exports = app