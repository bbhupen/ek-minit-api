const joi = require('joi')

const schema = {
  question2: joi
    .object({
      name: joi.string().required(),
      manufacturer: joi.string(),
      manufacturer_country: joi.string().valid('USA', 'India'),
      price: joi.number(),
      features: joi.object({
        color: joi.array(),
        os: joi.string,
      }),
    })
    .options({ abortEarly: false }),
}

module.exports = { ...schema }
