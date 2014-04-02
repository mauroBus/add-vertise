define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var CarouselView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'carousel-view',

    ui: {
      carousel: '.carousel'
    },

    templateHelpers: function() {
      return {
        uuid: this.uuid,
        imgs: this.imgs
      };
    },

    // hash with: {src: '...', alt: '...', caption: '...'}
    imgs: null,

    initialize: function(options) {
      this.imgs = options.imgs || [];
    },

    onRender: function() {
      this.ui.carousel.carousel();
    }

  });

  return CarouselView;
});
