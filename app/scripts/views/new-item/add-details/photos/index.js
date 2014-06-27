define(
  [
    'marionette',
    'jst!./_index.html',
    'widgets/photo/index',
    'collections/photo.collection',
    'models/photo.model'
  ],
  function(Marionette, Tpl, PhotoView, PhotoCollection, PhotoModel) {
  'use strict';

  var PhotosView = Marionette.CompositeView.extend({
    className: 'photos-view',

    template: Tpl,

    ui: {
      addPhotosBtn: '.js-addPhotoBtn',
      addPhotoInput: '.js-inputPhoto',
      photoCount: '.js-photos-count'
    },

    events: {
      'click @ui.addPhotosBtn': '_onAddPhotos',
      'change @ui.addPhotoInput': '_addPhoto'
    },

    itemView: PhotoView,
    itemViewContainer: '.js-photos-container',

    initialize: function() {
      this.collection = new PhotoCollection();
    },

    _onAddPhotos: function() {
      this.ui.addPhotoInput.click();
      this.listenTo(this.collection, 'all', function() {
        this.ui.photoCount.text(this.collection.length);
      });
    },

    _addPhoto: function() {
      var files = this.ui.addPhotoInput[0].files;
      var photosModel;

      _.each(files, function(file) {
        photosModel = new PhotoModel({
          name: file.name,
          file: file
        });
        this.collection.add(photosModel);
      }, this);
    }

  });

  return PhotosView;
});
