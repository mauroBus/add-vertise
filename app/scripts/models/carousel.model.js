define(
  [
    'backbone'
  ],
  function(Backbone) {

    var ItemModel = Backbone.Model.extend({
      defaults: {
        imgs: [],
        interval: 5000
      }

    });

    return ItemModel;
  }
);
