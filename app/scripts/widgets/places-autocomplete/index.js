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

    onRender: function() {
      var input = this.ui.locationInput[0];
      var options = {
        componentRestrictions: {
          country: 'AR'
        },
        types: ['(cities)']// types: ['locality', 'sublocality']
      };

      this.autocompleteAPI = new google.maps.places.Autocomplete(input, options);
    },

    getLocation: function() {
      return this.autocompleteAPI.getPlace();
    }

  });

  return PlacesAutocompleteView;
});
