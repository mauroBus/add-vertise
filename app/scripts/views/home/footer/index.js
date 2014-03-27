define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var FooterView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'footer-view'
  });

  return FooterView;
});
