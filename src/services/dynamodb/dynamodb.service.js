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
      }
    };

    await dynamoDb.delete(params, (error) => {
      if (error) {
        throw new Error('Unexpected error occured');
      }
    }).promise();

    return true;
  } catch (error) {
    throw APIError.withcode('FAILED_TO_DELETE', 404);
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
    const params = {
      TableName
    };

    const results = await dynamoDb.scan(params, (error, data) => {
      if (error) {
        throw new Error('Unexpected error occured');
      }

      return data.Items;
    }).promise();

    return results;
  } catch (error) {
    throw APIError.withcode('FAILED_TO_SCAN', 404);
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
      TableName
      Key: {
        slug
      }
    };

    dynamoDb.get(params, (error, result) => {
      if (error) {
        throw new Error('Unexpected error occured');
      }

      if (result) {
        personaResult = result.Item;
      }
    });
  } catch (error) {
    throw APIError.withcode('FAILED_TO_GET', 404);
  }
};


module.exports = {
  deleteDb,
  scanDb,
  getDb
};
