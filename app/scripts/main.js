require.config({

  paths: {
    'jquery': '../bower_components/jquery/jquery',
    'underscore': '../bower_components/underscore/underscore',

    // backbone
    'backbone': '../bower_components/backbone/backbone',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',

    // marionette
    'marionette': '../bower_components/marionette/lib/core/amd/backbone.marionette',

    // requirejs plugins
    'text': '../bower_components/text/text',
    'jst': '../bower_components/jst/jst',

    // progressbar
    'nprogress': '../bower_components/nprogress/nprogress',

    // File Uploader
    'moxie': '../bower_components/plupload/js/moxie',
    'plupload': '../bower_components/plupload/js/plupload.dev'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone']
    },
    nprogress: {
      deps: ['jquery'],
      exports: 'NProgress'
    },
    plupload: {
      deps: ['moxie'],
      exports: 'plupload'
    }
  }
});

require(['app'], function(app) {
  'use strict';

  app.on('initialize:before', function() {
    // progress.start();
  });

  app.on('start', function() {
    // progress.finish();
  });

  // $(document).ajaxStart(function() {
  //   progress.start();
  // })
  //   .ajaxStop(function() {
  //     progress.finish();
  //   });

  app.start();

});
