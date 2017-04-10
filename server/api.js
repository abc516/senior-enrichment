'use strict'
const api = require('express').Router()
const db = require('../db/models')
const Campus = db.Campus
const Student = db.Student

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campuses', function (req, res, next) {
  Campus.findAll({})
  .then((foundCampuses) => {
    console.log('campuses', foundCampuses)
    res.send(foundCampuses)
  })
  .catch(next)
})

api.get('/campuses/:campusId', function (req, res, next) {
  Campus.findById(req.params.campusId)
  .then((campus) => {
    res.send(campus)
  })
})

api.get('/students', function (req, res, next) {
  Student.findAll({})
  .then((students) => res.send(students))
  .catch(next)
})

module.exports = api
