require('dotenv').config()
const express = require('express')
const app = express()
const practiceQuestions = require('./routes/practiceQuestions')

app.use(express.urlencoded({ extended: true }))

// serving static files
app.use(express.static(__dirname + '/public'))

app.use('/api/v1/', practiceQuestions)
console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log('server started')
})
