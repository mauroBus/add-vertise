define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var HeaderView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'header-view'
  });

  return HeaderView;
});
