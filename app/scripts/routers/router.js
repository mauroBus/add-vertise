define([
    'backbone',
    'views/home/index',
    'views/main-list/index',
    'views/404-not-found/index'
  ],
  function(Backbone, HomeView, MainListView, NotFoundPageView) {
  'use strict';

  var AdvertiseRouter = Backbone.Router.extend({

    routes: {
      '': 'loadHomePage',
      'help': 'help',    // #/help
      'list/:prov/:city': 'loadItemsList',  // #/list/BuenosAires/Necochea
      'list/:prov/:city/:id': 'loadItemFullDetails', // #/item/23
      '*anyOther': 'loadErrorPage'
    },

    app: null,
    collection: null,

    mainListView: null,

    initialize: function(options) {
      this.app = options.app;
      this.collection = options.collection;
    },

    help: function() {
      // TODO
    },

    loadItemsList: function(prov, city) {
      this._createMainListView(prov, city);
      this.mainListView.showList();
    },

    loadItemFullDetails: function(prov, city, id) {
      this._createMainListView(prov, city);
      this.mainListView.showDetails(id);
    },

    loadHomePage: function() {
      var homeView = new HomeView();
      this.app.mainRegion.show(homeView);
    },

    loadErrorPage: function() {
      var pageNotFoundView = new NotFoundPageView();
      this.app.mainRegion.show(pageNotFoundView);
    },

    _createMainListView: function(prov, city) {
      if (!this.mainListView) {
        this.mainListView = new MainListView({
          collection: this.collection,
          prov: prov,
          city: city
        });
      }

      this.app.mainRegion.show(this.mainListView);
    }

  });

  var init = function(options) {
    var r = new AdvertiseRouter(options);

    Backbone.on('navigate:list', function(data) {
      r.navigate('/list/' + data.dest, { trigger: true });
    });

    Backbone.on('navigate:item:details', function(item) {
      r.navigate(Backbone.history.fragment + '/' + item.id, { trigger: true });
    });

    Backbone.on('navigate:login', function() {
      r.navigate('/login', { trigger: true });
    });

    Backbone.on('navigate:register', function() {
      r.navigate('/register', { trigger: true });
    });

    Backbone.on('navigate:publish', function() {
      r.navigate('/publish', { trigger: true });
    });

    Backbone.history.start();
  };

  return {
    init : init
  };

});
