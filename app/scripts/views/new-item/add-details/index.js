define([
    'marionette',
    'jst!./_index.html',
    './photos/index'
  ],
  function(Marionette, Tpl, PhotosView) {
  'use strict';

  var AddDetailsView = Marionette.Layout.extend({
    template: Tpl,
    className: 'add-details-view',

    regions: {
      photosRegion: '.js-photos-region'
    },

    ui: {
      backBtn: '.js-backBtn',
      publishBtn: '.js-publishBtn'
    },

    events: {
      'click @ui.backBtn': '_onBack',
      'click @ui.publishBtn': '_onPublish'
    },

    photosView: null,

    initialize: function() {
      this.photosView = new PhotosView();
    },

    onRender: function() {
      this.photosRegion.show(this.photosView);
    },

    _onBack: function() {
      this.trigger('back');
    },

    _onPublish: function() {
      this.model.save();
    }

  });

  return AddDetailsView;
});
