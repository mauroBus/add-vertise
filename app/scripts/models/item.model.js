define([
    'backbone'
  ],
  function(Backbone) {

    var ItemModel = Backbone.Model.extend({
      defaults: {
        id: -1,
        userName: 'no user name',
        userId: -1,
        text: 'No advertise text.'
      },

      initialize: function(options) {
      }
    });

    return ItemModel;
  }
);
