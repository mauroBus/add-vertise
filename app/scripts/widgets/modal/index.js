/**
 * @module @uiModal
 * Modal Class built with Bootstrap Modal and Marionette.Layout.
 * The Layout has only one region inside, this region contains the content view.
 * The Modal could be instantiated or extended.
 */
define([
    'marionette',
    'underscore',
    'jst!./_index.html'
  ],
  function(Marionette, _, Tpl) {

  var ModalView = Marionette.Layout.extend({

    template: Tpl,

    regions: {
      contentRegion: '.js-content-region'
    },

    events: {
      'click .js-successBtn': 'onSuccessBtnClick'
    },

    className: 'modal-widget modal fade',

    contentView: null,
    title: '',
    successBtnText: '',

    initialize: function(options) {
      var self = this;
      this.contentView = (this.options.contentView) ? this.options.contentView : this.getContentView();

      if (!this.contentView) {
        throw 'You must provide a child view to be rendered';
      }

      this.title = this.title ? this.title : (options.title || this.getTitle());
      this.successBtnText = options.successBtnText || '';
    },

    onRender: function() {
      this.contentRegion.show(this.contentView);
      this.setupBootstrapModal();
    },

    /**
     * Placeholder to get the content view.
     * @return {Object} the modal content view (i.e: ItemView, Layout, Composite,
     *                  etc. or any Custom View).
     * @Note: In case of inherits from this modal, this method should be rewritten to return
     *   the view that will render inside the modal.
     */
    getContentView: function() {},

    /**
     * Placeholder to get the modal title.
     * @return {String} The modal title.
     */
    getTitle: function() {
      return '';
    },

    serializeData: function() {
      return {
        title: this.title,
        successBtnText: this.successBtnText
      };
    },

    setupBootstrapModal: function() {
      this.$el
        .modal()
        .on('hidden', _.bind(this.close, this))
        .focus();
    },

    /**
     * When the success button is clicked, it triggers the "success" event
     *  to notify about it.
     */
    onSuccessBtnClick: function() {
      this.trigger('success');
    }

  });

  return ModalView;
});
