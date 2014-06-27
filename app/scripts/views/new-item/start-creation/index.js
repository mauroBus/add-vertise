define([
  'marionette',
  'jst!./_index.html',
  'widgets/places-autocomplete/index'
  ],
  function(Marionette, Tpl, PlacesAutocompleteView) {
  'use strict';

  var StartCreationView = Marionette.Layout.extend({
    template: Tpl,
    className: 'start-creation-view',

    ui: {
      category: '.js-category',
      capacitySelectTxt: '.js-capacitySelectTxt',
      placeRegion: '.js-place-region',
      placeSelection: '.js-placeSelection',
      placeSelectionName: '.js-placeSelectionName',
      placeEdit: '.js-placeEdit',
      continueBtn: '.js-continueBtn'
    },

    events: {
      'click @ui.placeEdit': '_editPlace',
      'click @ui.continueBtn': '_onContinue'
    },

    regions: {
      placeRegion: '.js-place-region'
    },

    placeView: null,

    initialize: function() {
      this.placeView = new PlacesAutocompleteView({
        placeholder: 'Elige un lugar?',
        selectCbk: _.bind(this._onPlaceSelected, this)
      });
    },

    onRender: function() {
      this.ui.category.button();
      this.ui.placeSelection.hide();
      this.placeRegion.show(this.placeView);
    },

    _onPlaceSelected: function(place) {
      this.ui.placeRegion.hide();
      this.ui.placeSelectionName.text(place.name);
      this.ui.placeSelection.show();
    },

    _editPlace: function() {
      this.ui.placeRegion.show();
      this.ui.placeSelection.hide();
    },

    _onContinue: function() {
      var category = this._getCategorySelected();
      var place = this.placeView.getLocation();
this.trigger('continue');
      if (category && place) {
        this.model.set({
          category: category,
          location: place.name
        });

        this.trigger('continue');
      }
    },

    _getCategorySelected: function() {
      if ( this.ui.category.find('#categoryProperty').is(':checked') ) {
        return 'property';
      }
      if ( this.ui.category.find('#categoryVehicle').is(':checked') ) {
        return 'vehicle';
      }
      if ( this.ui.category.find('#categoryOther').is(':checked') ) {
        return 'other';
      }
      return null; // no selection.
    }

  });

  return StartCreationView;
});
