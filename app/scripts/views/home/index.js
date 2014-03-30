define([
  'jquery',
  'marionette',
  'jst!./_index.html',
  'jquery-ui'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'home-view',

    ui: {
      'submitBtn': '.js-submitLocation',
      'locationInput': '.js-locationInput'
    },

    events: {
      'click @ui.submitBtn': 'onSubmitLocation'
    },

    onRender: function() {
      this.ui.locationInput.autocomplete({
        source: [
          'a',
          'asd',
          'sda',
          'fdga',
          'b',
          'c'
        ]
      });
    },

    onSubmitLocation: function() {
      var location = this.ui.locationInput.val();

      Backbone.trigger('navigate:search', {
        dest: location
      });
    }
  });

  return HomeView;
});
