define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  './header/index',
  './main-content/index',
  './sidebar/index',
  './footer/index'
  ],
  function($, Marionette, Tpl, HeaderView, MainContentView, SideBarView, FooterView) {
  'use strict';

  var MainView = Marionette.Layout.extend({
    template: Tpl,
    className: 'main-view',

    regions: {
      header : '.header-region',
      sideBar: '.sideBar-region',
      mainContent: '.mainContent-region',
      footer: '.footer-region'
    },

    onRender: function() {
      var headerView = new HeaderView();
      this.header.show(headerView);

      var mainContentView = new MainContentView({
        collection: this.options.collection
      });
      this.mainContent.show(mainContentView);

      var sideBarView = new SideBarView();
      this.sideBar.show(sideBarView);

      var footerView = new FooterView();
      this.footer.show(footerView);
    }
  });

  return MainView;
});
