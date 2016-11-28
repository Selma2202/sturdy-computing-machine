'use strict'

const request = require ('supertest')
const expect = require ('chai').expect

// import the server from app.js
let server = require (__dirname + '/../app.js')

// run app in testing environment
let app = request (server)

// test whether the server works
describe('Testing whether the server works', f => {
	//check if the server is online
	describe ( 'check if GET / is online', f => {
		it ('returns a 200 status code', done => {
			app.get ('/')
			// .expect (200) //because we use expect part of the chai library
			.end ( (err, res) => {
				expect(res.statusCode).to.equal(200)
				console.log(res)
				done ()
			})

		})
	})
})