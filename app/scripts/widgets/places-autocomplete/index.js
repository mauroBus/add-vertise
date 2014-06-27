define([
  'marionette',
  'jst!./_index.html',
  // google maps api:
  'async!http://maps.google.com/maps/api/js?libraries=places&sensor=false'
  ],
  function(Marionette, Tpl) {
  'use strict';

  var PlacesAutocompleteView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'places-autocomplete-view',

    ui: {
      locationInput: '.js-locationInput'
    },

    autocompleteAPI: null,

    serializeData: function() {
      return {
        placeholder: this.options.placeholder || '¿A dónde quieres ir?'
      };
    },

    onRender: function() {
      var input = this.ui.locationInput[0];
      var options = {
        componentRestrictions: {
          country: 'AR'
        },
        types: ['(cities)']// types: ['locality', 'sublocality']
      };

      this.autocompleteAPI = new google.maps.places.Autocomplete(input, options);

      if (this.options.selectCbk) {
        var that = this;

        google.maps.event.addListener(this.autocompleteAPI, 'place_changed', function() {
            that.options.selectCbk(this.getPlace());
        });
      }
    },

    getLocation: function() {
      return this.autocompleteAPI.getPlace();
    }

  });

  return PlacesAutocompleteView;
});
