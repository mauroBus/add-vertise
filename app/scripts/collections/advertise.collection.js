define([
    'backbone',
    'models/advertise.model',
    'helpers/url'
  ],
  function(Backbone, AdvertiseModel, Url) {

    var AdvertiseCollection = Backbone.Collection.extend({
      model: AdvertiseModel,

      url: Url['advertises'],

      fetch: function(options) {
        if (!options || options.query === 'allItems') {
          return Backbone.Collection.prototype.fetch.apply(this, arguments);
        }
      }
    });

    return AdvertiseCollection;
  }
);
