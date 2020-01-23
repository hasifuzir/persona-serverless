const { OK } = require('@utils/helper');
const logger = require('@utils/logger');

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const { PERSONA_TABLE } = process.env;

/**
 * getPersona
 * @public
 */

let personaResult;

exports.getPersona = async (event) => {
  // logger.debug(event);
  const params = {
    TableName: PERSONA_TABLE,
    Key: {
      slug: event.pathParameters.slug
    }
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      throw new Error('Oops');
    }

    if (result) {
      personaResult = result.Item;
    }
  });

  return OK(`${personaResult.name} found`, personaResult);
};
