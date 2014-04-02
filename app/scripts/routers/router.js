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
      'help': 'help',    // #help
      'list/:prov/:city': 'list',  // #list/BuenosAires/Necochea
      '*anyOther': 'loadErrorPage'
    },

    app: null,
    collection: null,

    initialize: function(options) {
      this.app = options.app;
      this.collection = options.collection;
    },

    help: function() {
      // TODO
    },

    list: function(prov, city) {
      this._loadSearchPage();

      this.collection.fetch({
        prov: prov,
        city: city
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

    Backbone.on('navigate:list', function(data) {
      r.navigate('/list/' + data.dest, { trigger: true });
    });

    Backbone.on('navigate:item:details', function(item) {
      r.navigate('/details/item/' + item.id, { trigger: true });
    });

    Backbone.history.start();
  };

  return {
    init : init
  };

});
