/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'vlc-tech-hub',
    podModulePrefix: 'vlc-tech-hub/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: 'https://vlctechhub-api.herokuapp.com'
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:5000';

    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_TRANSITIONS = false;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    ENV.APP.API_HOST = 'http://localhost:4200';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self'",
    'connect-src': "'self' vlctechhub-api.herokuapp.com localhost:5000",
    'img-src': "'self' data:",
    'style-src': "'self' 'unsafe-inline'",
    'media-src': "'self'"
  };

  ENV.moment = {
    includeLocales: ['es'],
    includeTimezone: 'all'
  };

  return ENV;
};
