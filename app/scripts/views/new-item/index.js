define([
  'marionette',
  'jst!./_index.html',
  'models/item.model',
  './start-creation/index',
  './add-details/index',
  ],
  function(Marionette, Tpl, ItemModel, StartCreationView, AddDetailsView) {
  'use strict';

  var NewItemView = Marionette.Layout.extend({
    template: Tpl,
    className: 'new-item-view',

    regions: {
      startRegion: '.js-start-region',
      detailsRegion: '.js-details-region'
    },

    ui: {
      startRegion: '.js-start-region',
      detailsRegion: '.js-details-region'
    },

    startCreationView: null,
    detailedView: null,

    initialize: function() {
      this.model = new ItemModel();
      this.startCreationView = new StartCreationView({
        model: this.model
      });

      this.detailedView = new AddDetailsView({
        model: this.model
      });

      this.listenTo(this.startCreationView, 'continue', this._showDetailed);
      this.listenTo(this.detailedView, 'back', this._showStartup);
    },

    onRender: function() {
      this.startRegion.show(this.startCreationView);
      this.detailsRegion.show(this.detailedView);

      this.ui.detailsRegion.hide();
    },

    _showStartup: function() {
      var that = this;

      this.ui.detailsRegion.hide({
        duration: 300,
        complete: function() {
          that.ui.startRegion.show(500);
        }
      });
    },

    _showDetailed: function(place) {
      var that = this;

      this.ui.startRegion.hide({
        duration: 300,
        complete: function() {
          that.ui.detailsRegion.show(500);
        }
      });
    }

  });

  return NewItemView;
});
