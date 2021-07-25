const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the practice questions api ! Presnt as /q1,/q2,/q3')
})

router.get('/q1', (req, res) => {
  //do something
})

router.get('/q2', (req, res) => {
  //do something
})

router.get('/q3', (req, res) => {
  //do something
})

router.get('/q4', (req, res) => {
  //do something
})

router.get('/q5', (req, res) => {
  //do something
})

router.get('/q6', (req, res) => {
  //do something
})

module.exports = router
