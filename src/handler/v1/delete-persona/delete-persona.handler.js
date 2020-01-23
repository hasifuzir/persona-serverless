const { OK } = require('@utils/helper');
const logger = require('@utils/logger');
const { deleteDb } = require('@services/dynamodb');
const { APIError } = require('@utils/APIError');


const { PERSONA_TABLE } = process.env;

/**
 * deletePersona
 * @public
 */
exports.deletePersona = async (event) => {
  const { slug } = event.pathParameters;

  const personaDelete = await deleteDb(PERSONA_TABLE, slug);

  return OK(`Persona ${personaDelete.name} deleted`, personaDelete);
};
