define([
    'backbone'
  ],
  function(Backbone) {
  'use strict';

  var AdvertiseRouter = Backbone.Router.extend({

    routes: {
      'help':                 'help',    // #help
      'search/:query':        'search'  // #search/advertises
      // 'search/:query/p:page': 'search'   // #search/kiwis/p7
    },

    collection: null,

    initialize: function(options) {
      this.collection = options.collection;
    },

    help: function() {
    },

    search: function(query, page) {
      this.collection.fetch({
        query: query
      });
    }

  });

  var init = function(options) {
    var r = new AdvertiseRouter(options);
    Backbone.history.start();
  };

  return {
    init : init
  };

  // var Controller = Marionette.Controller.extend({
  //   initialize: function(app) {
  //     this.app = app;
  //     this.composer = app.composer;
  //     this.isTurnedOff = true;
  //   },

  //   landing: function() {
  //     if (this.isTurnedOff) {
  //       var landingView = new LandingView({
  //         model: this.app.models.user
  //       });

  //       this.composer.region('body/main').show(landingView);

  //       this.isTurnedOff = false;
  //     }
  //   },

  //   onTurnOff: function() {
  //     this.isTurnedOff = true;
  //   }
  // });

  // return Controller;
});
