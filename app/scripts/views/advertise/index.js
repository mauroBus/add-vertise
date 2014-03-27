define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var AdvertiseView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'advertise-view'
  });

  return AdvertiseView;
});
