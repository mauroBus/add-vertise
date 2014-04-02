define([
  'marionette',
  'jst!./_index.html',
  'widgets/places-autocomplete/index'
  ],
  function(Marionette, Tpl, PlacesAutocompleteView) {
  'use strict';

  var SearchView = Marionette.Layout.extend({
    template: Tpl,
    className: 'search-view',

    regions: {
      autocomplete: '.autocomplete-region'
    },

    ui: {
      'submitBtn': '.js-submitLocation'
    },

    events: {
      'click @ui.submitBtn': 'onSubmitLocation'
    },

    autocompleteView: null,
    sizeClass: '',

    initialize: function(options) {
      this.autocompleteView = new PlacesAutocompleteView();
      this.sizeClass = (options && options.size === 'big') ? 'big' : 'small';
    },

    serializeData: function() {
      return {
        sizeClass: this.sizeClass
      };
    },

    onRender: function() {
      this.autocomplete.show(this.autocompleteView);
    },

    onSubmitLocation: function() {
      var location = this.autocompleteView.getLocation();
      if (!location) return;

      var city,
        prov,
        addressCmps = location.formatted_address.split(',');

      city = addressCmps.length > 2 ? addressCmps[0] : 'all';
      prov = addressCmps.length > 2 ? addressCmps[1] : addressCmps[0];

      // replacing spaces:
      city = city.replace(/ /g,'');
      prov = prov.replace(/ /g,'');

      Backbone.trigger('navigate:list', {
        dest: prov + '/' + city
      });
    }

  });

  return SearchView;
});
