define([
    'backbone',
    'models/advertise.model',
    'helpers/url'
  ],
  function(Backbone, AdvertiseModel, Url) {

    var AdvertiseCollection = Backbone.Collection.extend({
      model: AdvertiseModel,

      url: Url['advertises']
    });

    return AdvertiseCollection;
  }
);
