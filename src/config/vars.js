const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(process.cwd(), '.env'),
  sample: path.join(process.cwd(), '.env.example')
});

module.exports = {
  env: process.env.NODE_ENV,
  serviceName: 'persona-serverless',
  cacheSetting: {
    cacheHost: process.env.CACHE_HOST,
    cachePort: process.env.CACHE_PORT,
    cacheCluster: process.env.CACHE_CLUSTER
  }
};
