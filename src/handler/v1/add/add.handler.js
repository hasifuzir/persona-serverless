const { OK } = require('@utils/helper');
const logger = require('@utils/logger');

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const { PERSONA_TABLE } = process.env;

/**
 * add
 * @public
 */
exports.add = async (event) => {
  // logger.debug(event);

  const {
    slug, name, arcana, baseLevel
  } = event.body;

  return OK('Event body', slug);
};
