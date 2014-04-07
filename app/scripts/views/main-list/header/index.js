define([
  'backbone',
  'marionette',
  'jst!./_index.html',
  'widgets/search/index'
  ],
  function(Backbone, Marionette, Tpl, PlacesSearchView) {
  'use strict';

  var HeaderView = Marionette.Layout.extend({
    template: Tpl,
    className: 'header-view',

    regions: {
      placesSearch: '.places-search-region'
    },

    ui: {
      initSession: '.js-init-session',
      register: '.js-register',
      publish: '.js-publish',
    },

    events: {
      'click @ui.initSession': 'initSession',
      'click @ui.register': 'register',
      'click @ui.publish': 'publish'
    },

    placesSearchView: null,

    initialize: function(options) {
      this.placesSearchView = new PlacesSearchView({
        size: 'small'
      });
    },

    onRender: function() {
      this.placesSearch.show(this.placesSearchView);
    },

    initSession: function() {
      Backbone.trigger('navigate:login');
    },

    register: function() {
      Backbone.trigger('navigate:register');
    },

    publish: function() {
      Backbone.trigger('navigate:publish');
    }

  });

  return HeaderView;
});
