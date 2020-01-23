const Joi = require('@hapi/joi');

const arcana = ['fool', 'jester', 'magician', 'consultant', 'priestess', 'empress', 'emperor', 'hierophant', 'lovers', 'chariot', 'justice', 'hermit', 'fortune', 'strength', 'hunger', 'hanged-man', 'death', 'death', 'temperance', 'devil', 'tower', 'star', 'moon', 'sun', 'judgement', 'aeon', 'world', 'universe', 'faith'];


module.exports = {
  name: 'add',
  path: '/v1/add',
  type: 'post',
  joiSchema: {
    body: {
      slug: Joi.string().required(),
      name: Joi.string().required(),
      arcana: Joi.string().lowercase().required().valid(arcana),
      baseLevel: Joi.number().min(0).required()
    },
    response: {
      200: {
        description: 'OK',
        body: {
          responseCode: 200,
          responseMessage: Joi.string().required(),
          response: {}
        }
      },
      400: {
        description: 'Error Response',
        body: {
          responseCode: 400,
          responseMessage: Joi.string().required(),
          response: {
            errors: Joi.array().items(Joi.object().keys({
              errorCode: Joi.string().required(),
              errorTitle: Joi.string().required(),
              errorDescription: Joi.string().required(),
              errorDebugDescription: Joi.string()
            }))
          }
        }
      }
    }
  }
};
