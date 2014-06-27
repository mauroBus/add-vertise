define([
    'backbone',
    'views/home/index',
    'views/main-list/index',
    'views/404-not-found/index',
    'views/login/index',
    'views/new-item/index'
  ],
  function(Backbone, HomeView, MainListView, NotFoundPageView, LoginView, NewItemView) {
  'use strict';

  var AdvertiseRouter = Backbone.Router.extend({

    routes: {
      '': 'loadHomePage',
      'home': 'loadHomePage',
      'help': 'help',    // #/help
      'list/:prov/:city': 'loadItemsList',  // #/list/BuenosAires/Necochea
      'list/:prov/:city/:id': 'loadItemFullDetails', // #/item/23
      'login': 'loadLogin',
      'publish': 'loadPublish',
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

    loadLogin: function() {
      var login = new LoginView();
      this.app.mainRegion.show(login);
    },

    loadPublish: function() {
      var publishView = new NewItemView();
      this.app.mainRegion.show(publishView);
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

    Backbone.on('navigate:home', function(data) {
      r.navigate('/home', { trigger: true });
    });

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
