const { OK } = require('@utils/helper');
const logger = require('@utils/logger');
const { scanDb } = require('@services/dynamodb');

const { PERSONA_TABLE } = process.env;

/**
 * persona
 * @public
 */
exports.persona = async (event) => {
  const personaResult = await scanDb(PERSONA_TABLE);

  return OK('List of Persona', personaResult);
};
