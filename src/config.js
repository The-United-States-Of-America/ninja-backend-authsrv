const config = {
  development: {
    port: 8001
  },
  production: {
    port: process.env.PORT
  }
};

/**
 * Export our configuration for the environment based on environment variable
 * NODE_ENV
 */
export default config[process.env.NODE_ENV || 'development'];
