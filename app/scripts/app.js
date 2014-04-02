define([
    'marionette',
    'routers/router',
    'collections/item.collection',
    'bootstrap'
  ],
  function(Marionette, MainRouter, AdvertiseCollection, Bootstrap) {
  'use strict';

  var app = new Marionette.Application();
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
