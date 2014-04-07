define([
  'marionette',
  'jst!./_index.html',
  'widgets/search/index',
  'widgets/carousel/index',
  'models/carousel.model'
  ],
  function(Marionette, Tpl, SearchView, CarouselView, CarouselModel) {
  'use strict';

  var HomeView = Marionette.Layout.extend({
    template: Tpl,
    className: 'home-view',

    regions: {
      search: '.search-region',
      carousel: '.carousel-region'
    },

    searchView: null,
    carouselView: null,

    initialize: function(options) {
      this.searchView = new SearchView({
        size: 'big'
      });

      var carouselModel = new CarouselModel({
        imgs: [
          {
            src: 'https://a0.muscache.com/airbnb/static/landing_pages/home_v2/hero/356602-6d0f90db6c417bc75c26faec4289791f.jpg',
            alt: 'nose',
            caption: 'asd'
          },
          {
            src: 'http://archinspire.org/wp-content/uploads/2008/11/apartment-city-house-residential-design4.jpeg',
            alt: 'nose',
            caption: 'asd'
          },
          {
            src: 'http://us.123rf.com/400wm/400/400/arquiplay77/arquiplay771011/arquiplay77101100008/8163617-interieur-design-sc--ne-van-modern-appartement-met-woonkamer-en-diner-kamer-in-hout-en-bruin-kleuren.jpg',
            alt: 'nose',
            caption: 'asd'
          }
        ]
      });

      this.carouselView = new CarouselView({
        model: carouselModel
      });
    },

    onRender: function() {
      this.search.show(this.searchView);
      this.carousel.show(this.carouselView);
    }

  });

  return HomeView;
});
