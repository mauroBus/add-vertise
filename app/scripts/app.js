define([
    'marionette',
    'routers/router',
    'collections/item.collection',
    'bootstrap',
    'helpers/ajax-progress',
    'views/loading/index'
  ],
  function(Marionette, MainRouter, AdvertiseCollection, Bootstrap, ajaxProgress, LoadingView) {
  'use strict';

  var app = new Marionette.Application();

  app.on('initialize:before', function() {
    ajaxProgress.start();
  });

  app.on('start', function() {
    ajaxProgress.done();
  });


  var advCollection = new AdvertiseCollection();

  app.addRegions({
    mainRegion: '.app-main-region'
  });

  app.addInitializer(function() {
    MainRouter.init({
      app: app,
      collection: advCollection
    });
  });

  return app;
});
