const practiceQuestionSchema = require('./practiceQuestionSchema')

module.exports.validateQ2 = (req, res, next) => {
  practiceQuestionSchema.question2
    .validateAsync(req.body)
    .then(() => {
      next()
    })
    .catch((err) => {
      let errors = []
      for (let message of err.details) {
        errors.push(message.message)
      }
      res.json(errors)
    })
}
