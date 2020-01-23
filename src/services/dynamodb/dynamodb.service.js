/**
 * Dynamodb Service
 *
 */
const logger = require('@utils/logger');
const AWS = require('aws-sdk');
const { APIError } = require('@utils/APIError');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * Function to delete from DynamoDB
 * @param {String} TableName        Table to delete from
 * @param {String} slug          Key to delete
 *
 * @public
 */
const deleteDb = async (TableName, slug) => {
  try {
    const params = {
      TableName,
      Key: {
        slug
      },
      ReturnValues: 'ALL_OLD',
      ConditionExpression: 'attribute_exists(slug)'
    };

    const results = await dynamoDb.delete(params).promise();

    return results.Attributes;
  } catch (error) {
    if (error.code === 'ConditionalCheckFailedException') {
      throw APIError.withCode('PERSONA_NOT_FOUND', 404);
    } else {
      throw APIError.withCode('FAILED_TO_DELETE', 400);
    }
  }
};

/**
 * Function to scan from DynamoDB
 * @param {String} TableName        Table to scan
 *
 * @public
 */
const scanDb = async (TableName) => {
  try {
    const results = await dynamoDb.scan({ TableName }).promise();

    return results.Items;
  } catch (error) {
    throw APIError.withCode('FAILED_TO_SCAN', 400);
  }
};

/**
 * Function to get from DynamoDB
 * @param {String} TableName        Table to get from
 * @param {String} slug             slug to get
 *
 * @public
 */
const getDb = async (TableName, slug) => {
  try {
    const params = {
      TableName,
      Key: {
        slug
      },
      ConditionExpression: 'attribute_exists(slug)'
    };

    const results = await dynamoDb.get(params).promise();

    return results.Item;
  } catch (error) {
    if (error.code === 'ConditionalCheckFailedException') {
      throw APIError.withCode('PERSONA_NOT_FOUND', 404);
    } else {
      throw APIError.withCode('FAILED_TO_GET', 400);
    }
  }
};

/**
 * Function to add to DynamoDB
 * @param {String} TableName        Table to add to
 * @param {String} slug             Slug to add to Table
 * @param {String} name             Name to add to Table
 * @param {String} arcana           Arcana to add to Table
 * @param {String} baseLevel        Base level to add to Table
 *
 * @public
 */
const addDb = async (TableName, slug, name, arcana, baseLevel) => {
  try {
    const params = {
      TableName,
      Item: {
        slug,
        name,
        arcana,
        baseLevel
      },
      ConditionExpression: 'attribute_not_exists(slug)'
    };

    await dynamoDb.put(params).promise();
  } catch (error) {
    if (error.code === 'ConditionalCheckFailedException') {
      throw APIError.withCode('DUPLICATE_PERSONA', 404);
    } else {
      throw APIError.withCode('FAILED_TO_ADD', 400);
    }
  }
};

module.exports = {
  deleteDb,
  scanDb,
  getDb,
  addDb
};
