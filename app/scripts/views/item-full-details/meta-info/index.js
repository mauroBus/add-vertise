define([
    'marionette',
    'jst!./_index.html',
    'widgets/modal/index',
    '../consultation/index'
  ],
  function(Marionette, Tpl, ModalView, ConsultationView) {
  'use strict';

  var MetaInfoView = Marionette.Layout.extend({
    template: Tpl,
    className: 'meta-info-view',

    ui: {
      consult: '.js-consult'
    },

    events: {
      'click @ui.consult': 'openConsultModal'
    },

    regions: {
      consultModalRegion: '.consult-modal-region'
    },

    consultingView: null,

    openConsultModal: function() {
      if (!this.consultingView) {
        this.consultingView = new ConsultationView({
          model: this.model
        });
      }

      var modal = new ModalView({
        title: 'Enviar una consulta a ' + this.model.get('userName'),
        contentView: this.consultingView,
        successBtnText: 'Enviar Consulta'
      });

      this.consultModalRegion.show(modal);

      this.listenTo(modal, 'success', this._sendComment);
    },

    _sendComment: function() {
      this.consultingView.send();
    }
  });

  return MetaInfoView;
});
