const { OK } = require('@utils/helper');
const logger = require('@utils/logger');
const { addDb } = require('@services/dynamodb');

const { PERSONA_TABLE } = process.env;

/**
 * newPersona
 * @public
 */
exports.newPersona = async (event) => {
  const {
    slug, name, arcana, baseLevel
  } = event.body;

  await addDb(PERSONA_TABLE, slug, name, arcana, baseLevel);

  return OK('New Persona added');
};
