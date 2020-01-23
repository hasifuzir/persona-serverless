const { OK } = require('@utils/helper');
const logger = require('@utils/logger');
const { deleteDb } = require('@services/dynamodb');

const { PERSONA_TABLE } = process.env;

/**
 * deletePersona
 * @public
 */
exports.deletePersona = async (event) => {
  const { slug } = event.pathParameters;

  const personaDelete = await deleteDb(PERSONA_TABLE, slug);

  if (personaDelete) {
    return OK(`${slug} deleted`, null);
  }
};
