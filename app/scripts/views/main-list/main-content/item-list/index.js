define(
[
  'marionette',
  'jst!./_index.html',
  'views/item/index'
],
function(Marionette, Tpl, AdvertiseView) {
  'use strict';

  var ItemListView = Marionette.CompositeView.extend({
    className: 'item-list-view',

    template: Tpl,

    itemViewContainer: '.items-container',

    itemView: AdvertiseView,

    events: {
      'click .js-page-prev': 'onPrevPage',
      'click .js-page': 'onSelectPage',
      'click .js-page-next': 'onNextPage'
    },

    ui: {
      pagination: '.js-pagination'
    },

    currentPage: 0,
    totalPages: null,

    initialize: function() {
      this.listenTo(this.collection, 'sync', this.render);
    },

    templateHelpers: function() {
      return {
        models: this.collection.models,
        totalPages: this.collection.totalPages,
        currentPage: this.collection.currentPage + 1,
        active: this.collection.currentPage
      };
    },

    onRender: function() {
      this.currentPage = this.collection.currentPage;
      this.totalPages = this.collection.totalPages;
    },

    changePage: function(pageId) {
      this.currentPage = parseInt(pageId);
      this.collection.goTo(pageId);

      this.ui.pagination
        .find('.active')
        .removeClass('active');

      this.ui.pagination
        .find('[data-page-nbr="' + this.currentPage + '"]')
        .addClass('active');
    },

    onPrevPage: function() {
      if (this.currentPage > 0) {
        this.changePage(this.currentPage - 1);
      }
    },

    onSelectPage: function(event) {
      var pageNbr = $(event.target).attr('data-page-nbr');
      this.changePage(pageNbr);
    },

    onNextPage: function() {
      if (this.currentPage < this.totalPages - 1) {
        this.changePage(this.currentPage + 1);
      }
    }

  });

  return ItemListView;
});
