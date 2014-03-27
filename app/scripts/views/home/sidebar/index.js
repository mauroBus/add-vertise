define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var SidebarView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'sideBar-view'
  });

  return SidebarView;
});
