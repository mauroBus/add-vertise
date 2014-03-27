define([
  'marionette',
  'views/home/index',
  'routers/router',
  'collections/advertise.collection'
], function(Marionette, MainView, MainRouter, AdvertiseCollection) {
  'use strict';

  var app = new Marionette.Application();
  var advCollection = new AdvertiseCollection();

  app.addRegions({
    mainRegion: '.app-main-region'
  });

  app.addInitializer(function() {

    MainRouter.init({
      collection: advCollection
    });

    var mainView = new MainView({
      collection: advCollection
    });

    // Backbone History initialization
    // Backbone.history.start({
    //   pushState: false,
    //   root: Url.getRoot()
    // });

    // advCollection.once('sync', function() {
      app.mainRegion.show(mainView);
    // });
  });

  return app;
});
