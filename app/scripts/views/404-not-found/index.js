define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var PageNotFoundView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'page-not-found-view'
  });

  return PageNotFoundView;
});
