define([
    'backbone',
    'views/home/index',
    'views/main-list/index',
    'views/404-not-found/index'
  ],
  function(Backbone, HomeView, MainView, NotFoundPageView) {
  'use strict';

  var AdvertiseRouter = Backbone.Router.extend({

    routes: {
      '': 'loadHomePage',
      'help':                 'help',    // #help
      'search/:query':        'search',  // #search/advertises
      // 'search/:query/p:page': 'search'   // #search/advertises/p7
      '*anyOther':             'loadErrorPage'
    },

    app: null,
    collection: null,

    initialize: function(options) {
      this.app = options.app;
      this.collection = options.collection;
    },

    help: function() {
    },

    search: function(query, page) {
      this._loadSearchPage();

      this.collection.fetch({
        query: query
      });
    },

    loadHomePage: function() {
      var homeView = new HomeView();
      this.app.mainRegion.show(homeView);
    },

    loadErrorPage: function() {
      var pageNotFoundView = new NotFoundPageView();
      this.app.mainRegion.show(pageNotFoundView);
    },


    _loadSearchPage: function() {
      var mainView = new MainView({
        collection: this.collection
      });
      this.app.mainRegion.show(mainView);
    }

  });

  var init = function(options) {
    var r = new AdvertiseRouter(options);

    Backbone.on('navigate:search', function(data) {
      r.navigate('search/' + data.dest, {trigger: true});
    });

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
