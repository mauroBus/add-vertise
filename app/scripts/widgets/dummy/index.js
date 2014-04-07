define([
  'marionette',
  'jst!./_index.html'
  ],
  function(Marionette, Tpl) {
  'use strict';

  var DummyView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'dummy-widget jumbotron',

    title: null,

    initialize: function(options) {
      this.title = (options && options.title) ? options.title : '';
    },

    serializeData: function() {
      return {
        title: this.title
      };
    }

  });

  return DummyView;
});
