define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  'views/advertise/index'
  ],
  function($, Marionette, Tpl, AdvertiseView) {
  'use strict';

  var MainContentView = Marionette.CollectionView.extend({
    template: Tpl,
    className: 'mainContent-view',

    itemView: AdvertiseView,

    initialize: function(options) {
      this.collection = options.collection;
    }
  });

  return MainContentView;
});
