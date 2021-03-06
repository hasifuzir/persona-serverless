module.exports = {
  UNSPECIFIED: {
    errTitle: 'Error code not specified',
    errDesc: 'Please try again, if problem still persist, please contact web master',
    errDebugDesc: 'Error code not specified in the system'
  },
  UNKNOWN: {
    errTitle: 'Oops...something went wrong',
    errDesc: 'System is not responding properly',
    errDebugDesc: 'System is not able to handle the error gracefully'
  },
  EXTERNAL_SERVICE_TIMEOUT: {
    errTitle: 'External service getting timed out',
    errDesc: 'Please try again, if problem still persist, please contact web master',
    errDebugDesc: 'External Service not responding in stipulated time'
  },
  FAILED_TO_DELETE: {
    errTitle: 'Failed to delete from DynamoDB',
    errDesc: 'Please try again, if problem still persist, please contact web master',
    errDebugDesc: 'Error while deleting from DynamoDB'
  },
  FAILED_TO_SCAN: {
    errTitle: 'Failed to scan from DynamoDB',
    errDesc: 'Please try again, if problem still persist, please contact web master',
    errDebugDesc: 'Error while scanning from DynamoDB'
  },
  FAILED_TO_GET: {
    errTitle: 'Failed to get from DynamoDB',
    errDesc: 'Please try again, if problem still persists, please contact web master',
    errDebugDesc: 'Error while getting from DynamoDB'
  },
  PERSONA_NOT_FOUND: {
    errTitle: 'Failed to find Persona',
    errDesc: 'Please check slug if correct, if problem still persists, please contact web master',
    errDebugDesc: 'Error looking for Persona'
  },
  PERSONA_NOT_ADD: {
    errTitle: 'Failed to add Persona',
    errDesc: 'Please try again, if problem still persists, please contact web master',
    errDebugDesc: 'Error adding Persona'
  },
  DUPLICATE_PERSONA: {
    errTitle: 'Duplicate Persona',
    errDesc: 'Please check slug, if problem still persists, please contact web master',
    errDebugDesc: 'Error adding duplicate Persona'
  }
};
