define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  './header/index',
  './main-content/index',
  './footer/index',
  'views/item-full-details/index'
  ],
  function($, Marionette, Tpl, HeaderView, MainContentView, FooterView, ItemFullDetailsView) {
  'use strict';

  var MainListView = Marionette.Layout.extend({
    template: Tpl,
    className: 'main-list-view',

    regions: {
      headerRegion : '.header-region',
      mainContentRegion: '.mainContent-region',
      footer: '.footer-region'
    },

    prov: null,
    city: null,

    initialize: function(options) {
      this.prov = options.prov;
      this.city = options.city;

      this.collectionPromise = this.collection.fetch({
        prov: this.prov,
        city: this.city
      });
    },

    onRender: function() {
      var headerView = new HeaderView();
      var footerView = new FooterView();

      this.headerRegion.show(headerView);
      this.footer.show(footerView);
    },

    showDetails: function(id) {
      var that = this;
      that.collectionPromise.done(function() {
        var model = that.collection.get(id);
        if (!model) {return;}

        var itemFullDetailsView = new ItemFullDetailsView({
          model: model
        });

        that.mainContentRegion.show(itemFullDetailsView);
      });
    },

    showList: function() {
      var mainContentView = new MainContentView({
        collection: this.collection
      });
      this.mainContentRegion.show(mainContentView);
    }

  });

  return MainListView;
});
