define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var ItemView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'item-view',

    ui: {
      moreDetails: '.js-seeMoreDetails'
    },

    events: {
      'click @ui.moreDetails': 'seeMoreDetails'
    },

    seeMoreDetails: function() {
      Backbone.trigger('navigate:item:details', this.model.toJSON());
    }
  });

  return ItemView;
});
