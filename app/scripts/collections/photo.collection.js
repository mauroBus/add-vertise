define([
    'backbone',
    'models/photo.model'
  ],
  function(Backbone, PhotoModel) {

    var PhotoCollection = Backbone.Collection.extend({
      model: PhotoModel
    });

    return PhotoCollection;
  }
);
