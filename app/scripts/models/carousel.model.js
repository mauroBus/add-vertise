define([
    'backbone',
    'helpers/url'
  ],
  function(Backbone, Url) {

    var ItemModel = Backbone.Model.extend({
      defaults: {
        imgs: [],
        interval: 5000
      }

    });

    return ItemModel;
  }
);
