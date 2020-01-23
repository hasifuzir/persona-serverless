const _ = require('lodash');
const { OK } = require('@utils/helper');
const logger = require('@utils/logger');
const { getDb } = require('@services/dynamodb');
const { APIError } = require('@utils/APIError');

const { PERSONA_TABLE } = process.env;

/**
 * getPersona
 * @public
 */
exports.getPersona = async (event) => {
  const { slug } = event.pathParameters;

  const personaResult = await getDb(PERSONA_TABLE, slug);

  if (_.isEmpty(personaResult)) {
    throw APIError.withCode('PERSONA_NOT_FOUND', 404);
  } else {
    return OK(`${personaResult.name} details`, personaResult);
  }
};
