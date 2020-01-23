require('module-alias/register');

// define all the routes/handlers
const persona = require('./handler/v1/persona');
const newPersona = require('./handler/v1/new-persona');
const specificPersona = require('./handler/v1/get-persona');
const deletePersona = require('./handler/v1/delete-persona');

module.exports = {
  persona,
  newPersona,
  specificPersona,
  deletePersona
};
