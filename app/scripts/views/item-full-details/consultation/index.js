define([
  'marionette',
  'jst!./_index.html'
  ],
  function(Marionette, Tpl) {
  'use strict';

  var ConsultationView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'consultation-view',

    ui: {
      consultText: '.js-consult-text'
    },

    send: function() {
      alert(this.ui.consultText.val());
    }

  });

  return ConsultationView;
});
