define([
    'backbone',
    'models/item.model',
    'helpers/url'
  ],
  function(Backbone, AdvertiseModel, Url) {

    var ItemCollection = Backbone.Collection.extend({
      model: AdvertiseModel,

      url: Url['advertises'],

      fetch: function(options) {
        var opt = {
          data: {
            prov: options.prov,
            city: options.city
          }
        };

        return Backbone.Collection.prototype.fetch.call(this, opt);
      }

    });

    return ItemCollection;
  }
);
