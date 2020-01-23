const { OK } = require('@utils/helper');
const logger = require('@utils/logger');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const { PERSONA_TABLE } = process.env;

/**
 * newPersona
 * @public
 */
exports.newPersona = async (event, context) => {
  const {
    slug, name, arcana, baseLevel
  } = event.body;

  const params = {
    TableName: PERSONA_TABLE,
    Item: {
      slug,
      name,
      arcana,
      baseLevel
    }
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      throw new Error('Oops');
    }
  });

  return OK('New Persona added', {
    slug,
    name,
    arcana,
    baseLevel
  });
};
