define([
  'jquery',
  'marionette',
  'jst!./_index.html'
  ],
  function($, Marionette, Tpl) {
  'use strict';

  var ItemView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'item-view',

    ui: {
      moreDetails: '.js-seeMoreDetails'
    },

    events: {
      'click @ui.moreDetails': 'seeMoreDetails'
    },

    seeMoreDetails: function() {
      Backbone.trigger('navigate:item:details', this.model.toJSON());
    },

    templateHelpers: function() {
      return {
        formatedPublishDate: this.model.get('publishDate').toLocaleDateString()
      };
    }

    // _getWeekDay: function(date) {
    //   var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    //   return days[date.getDay()];
    // }
    //
    //
    // TIME ELAPSED:
    // var ms = new Date() - yourBirthDate;
    // var secs = ms/1000;

    // var minutes = secs    / 60 ;  secs    = secs    % 60;
    // var hours   = minutes / 60 ;  minutes = minutes % 60;

  });

  return ItemView;
});
