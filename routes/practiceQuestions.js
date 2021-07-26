const express = require('express')
const controller = require('../controller/practiceQuestions')
const router = express.Router()
const practiceQuestionValidate = require('../validation/practiceQuestion/practiceQuestionValidate')

router.get('/', (req, res) => {
  res.send('This is the practice questions api ! Presnt as /q1,/q2,/q3')
})

router.post('/q1', controller.question1)

router.post('/q2', practiceQuestionValidate.validateQ2, controller.question2)

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
