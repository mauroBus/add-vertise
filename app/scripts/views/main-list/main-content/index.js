define(
[
  'marionette',
  'jst!./_index.html',
  './item-list/index',
  './sidebar/index'
],
function(Marionette, Tpl, ItemListView, SidebarView) {
  'use strict';

  var MainContentView = Marionette.Layout.extend({
    template: Tpl,
    className: 'main-content-view',

    regions: {
      itemListRegion: '.item-list-region',
      sideBarRegion: '.sidebar-region'
    },

    itemListView: null,
    sideBarView: null,

    initialize: function(options) {
      this.itemListView = new ItemListView({
        collection: this.collection
      });
      this.sideBarView = new SidebarView();
    },

    onRender: function() {
      this.itemListRegion.show(this.itemListView);
      this.sideBarRegion.show(this.sideBarView);
    }

  });

  return MainContentView;
});
