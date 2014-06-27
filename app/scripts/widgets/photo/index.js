define([
    'marionette',
    'jst!./_index.html'
  ],
  function(Marionette, Tpl) {
  'use strict';

  var PhotoView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'photo-widget',

    ui: {
      deleteBtn: '.js-deleteBtn',
      img: '.js-img',
      loading: '.js-loading'
    },

    events: {
      'mouseenter': '_showDeleteBtn',
      'mouseleave': '_hideDeleteBtn',
      'click @ui.deleteBtn': '_onDelete'
    },

    initialize: function() {
      this.model
        .save()
        //  TODO: .error()
        .done(_.bind(this._setImg, this));
    },

    onRender: function() {
      this.ui.deleteBtn.hide();
    },

    _showDeleteBtn: function() {
      this.ui.deleteBtn.show();
    },

    _hideDeleteBtn: function() {
      this.ui.deleteBtn.hide();
    },

    _onDelete: function() {
      this.model.destroy();
      this.close();
    },

    _setImg: function() {
      this.ui.loading.hide();
      this.ui.img.attr('src', this.model.get('src'));
    }

  });

  return PhotoView;
});
