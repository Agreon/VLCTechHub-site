/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    fingerprint: {
      exclude: ['apple-touch-icon', 'favicon', 'mstile']
    },
    sassOptions: {
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets',
        'node_modules/jeet/scss/jeet'
      ]
    }
  });

  var extendedOptions = {};

  if (app.env === 'production') {
    extendedOptions = {
      inlineContent: {
        'tracking': './config/tracking.js'
      },
      pretender: {
        'enabled': false
      }
    };
  }

  for (var key in extendedOptions) {
    if (hasOwnProperty.call(extendedOptions, key)) {
      app.options[key] = extendedOptions[key];
    }
  }

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/jquery-dropdown/jquery.dropdown.js');
  app.import('bower_components/jquery-dropdown/jquery.dropdown.min.css');
  app.import('bower_components/jt.timepicker/jquery.timepicker.js');
  app.import('bower_components/jt.timepicker/jquery.timepicker.css');
  app.import('bower_components/autosize/dist/autosize.min.js');
  //app.import('vendor/css/basscss.css');

  return app.toTree();
};
