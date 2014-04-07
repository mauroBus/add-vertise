define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var CarouselView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'carousel-widget',

    ui: {
      carousel: '.carousel'
    },

    // hash with: {src: '...', alt: '...', caption: '...'}
    // imgs: null,
    // interval: null,

    /**
     * @param  {Object} options
     * @param  {Array} options.imgs array of Objects with:
     *                              { src: "[the image source]", alt: "[image alt]", caption: "[image caption]"}
     * @param  {Integer} interval The amount of time to delay between automatically cycling an item.
     */
    initialize: function(options) {
      // this.imgs = options.imgs || [];
      // this.interval = options.interval !== undefined ? options.interval : 5000;
      this.listenTo(this.model, 'change', this.render);
    },

    templateHelpers: function() {
      return {
        uuid: this.cid,
        imgs: this.model.get('imgs')
      };
    },

    onRender: function() {
      this.ui.carousel.carousel({
        interval: this.model.get('interval')
      });
    }

  });

  return CarouselView;
});
