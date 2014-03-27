define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  'collections/advertise.collection',
  'views/advertise/index'
  ],
  function($, Marionette, Tpl, AdvertiseCollection, AdvertiseView) {
  'use strict';

  var MainContentView = Marionette.CollectionView.extend({
    template: Tpl,
    className: 'mainContent-view',

    itemView: AdvertiseView,

    initialize: function(options) {
      this.collection = new AdvertiseCollection();
      this.collection.fetch();
    }
  });

  return MainContentView;
});
