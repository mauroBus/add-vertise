define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  'widgets/search/index'
  ],
  function($, Marionette, Tpl, PlacesSearchView) {
  'use strict';

  var HeaderView = Marionette.Layout.extend({
    template: Tpl,
    className: 'header-view',

    regions: {
      placesSearch: '.places-search-region'
    },

    placesSearchView: null,

    initialize: function(options) {
      this.placesSearchView = new PlacesSearchView({
        size: 'small'
      });
    },

    onRender: function() {
      this.placesSearch.show(this.placesSearchView);
    }
  });

  return HeaderView;
});
