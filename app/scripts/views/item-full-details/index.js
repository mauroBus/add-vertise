define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  'widgets/carousel/index',
  'models/carousel.model',
  'widgets/tabs/index',
  'widgets/dummy/index',
  'widgets/gmap/index',
  './meta-info/index'
  ],
  function($, Marionette, Tpl, CarouselView, CarouselModel, TabsView, DummyView, GMapView, MetaInfoView) {
  'use strict';

  var ItemFullDetailsView = Marionette.Layout.extend({
    template: Tpl,
    className: 'item-full-details-view',

    regions: {
      tabsRegion: '.tabs-region',
      metaInfoRegion: '.meta-info-region'
    },

    tabsView: null,
    metaInfoView: null,

    regionsReadyFlag: false,

    initialize: function(options) {
      this.model.fetch();

      this.tabsView = new TabsView({
        tabs: [
          {
            name: 'Fotos',
            constructor: CarouselView,
            params: _.bind(this._getCarouselViewParams, this)
          },
          {
            name: 'Mapa',
            constructor: GMapView,
            params: {
              model: this.model
            }
          },
          {
            name: 'Calendario',
            constructor: DummyView,
            params: {
              title: 'CALENDARIO'
            }
          }
        ]
      });

      this.metaInfoView = new MetaInfoView({
        model: this.model
      });

      this.listenTo(this.model, 'sync', this.update);
    },

    /**
     * Updates the model data dependencies. Showing the tabs and metaInfo views
     *  in its regions.
     */
    update: function() {
      this.render();

      this.tabsRegion.show(this.tabsView);
      this.metaInfoRegion.show(this.metaInfoView);

      this._updateCarouselModel();
    },

    /**
     * gets the carousel view's parameters.
     * @return {Object} the view's parameters with each image.
     */
    _getCarouselViewParams: function() {
      var parsedImgs = _.map(this.model.get('fullImgs'), function(imgPath) {
        return {
          src: imgPath,
          alt: '',
          caption: ''
        };
      });

      this.carouselModel = new CarouselModel({
        fullImgs: parsedImgs,
        interval: 10000
      });

      return {
        model: this.carouselModel
      };
    },

    /**
     * updates the imgs of "carouselModel" according with the view's model "fullImgs".
     */
    _updateCarouselModel: function() {
      var parsedImgs = _.map(this.model.get('fullImgs'), function(imgPath) {
        return {
          src: imgPath,
          alt: '',
          caption: ''
        };
      });

      this.carouselModel.set({
        imgs: parsedImgs
      });
    }

  });

  return ItemFullDetailsView;
});
