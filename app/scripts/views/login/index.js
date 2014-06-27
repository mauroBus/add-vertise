/* global define: true */
define(
[
  'marionette',
  'jst!./_index.html',
  'models/user.model',
  'jquery',
  'jquery.cookie'
],
  function(Marionette, Tpl, UserModel, $, jQueryCookie) {
  'use strict';

  var LoginView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'login-view',

    ui: {
      initSession: '.js-initSession',
      email: '.js-email',
      popoverEmail: '.js-popover-email',
      pass: '.js-pass',
      popoverPass: '.js-popover-pass',
      accessError: '.js-accessError',
      rememberMe: '.js-rememberMe'
    },

    events: {
      'click @ui.initSession': 'initSession'
    },

    initialize: function() {
      this.model = new UserModel();
      Backbone.Validation.bind(this);
    },

    onRender: function() {
      var emailCookie = $.cookie('login.user.email');
      var passCookie = $.cookie('login.user.password');

      if (emailCookie) {
        this.ui.email.val(emailCookie);
        this.ui.pass.val(passCookie);
      }
    },

    initSession: function() {
      var errors = {};
      errors.email = this.model.preValidate('email', this.ui.email.val());
      errors.password = this.model.preValidate('password', this.ui.pass.val());

      if (!errors.email && !errors.password) {
        this.model.set({
          email: this.ui.email.val(),
          password: this.ui.pass.val()
        });

        this._validateUser();
      } else {
        this._showErrors(errors);
      }
    },

    _showErrors: function(errors) {
      this.ui.popoverEmail.popover('destroy');
      this.ui.popoverPass.popover('destroy');

      if (errors.email) {
        this._showErrorPopover(this.ui.popoverEmail, errors.email);
      } else {
        this.ui.popoverEmail.removeClass('has-error');
        this.ui.popoverEmail.addClass('has-success');
      }

      if (errors.password) {
        this._showErrorPopover(this.ui.popoverPass, errors.password);
      } else {
        this.ui.popoverPass.removeClass('has-error');
        this.ui.popoverPass.addClass('has-success');
      }
    },

    _showErrorPopover: function($elem, msg) {
      $elem.addClass('has-error');

      $elem.popover({
        // placement: 'bottom',
        trigger: 'focus',
        html: true,
        content: '<span class="text-danger">' + msg + '</span>',
        container: 'body'
      });

      $elem.popover('show');
    },

    _validateUser: function() {
      var that = this;

      this.model.fetch()
        .done(function() {
          that._saveCookie();
          Backbone.trigger('navigate:home');
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          that._showAccessError(jqXHR.responseText);
        });
    },

    _showAccessError: function(errorMsg) {
      this.ui.email.val('');
      this.ui.pass.val('');

      this.ui.accessError
        .text(errorMsg)
        .removeClass('hide');

      this.ui.email.focus();
    },

    _saveCookie: function() {
      if (this.ui.rememberMe.is(':checked')) {
        $.cookie('login.user.email', this.model.get('email'));
        $.cookie('login.user.password', this.model.get('password'));
      }
    },

    onClose: function() {
      this.ui.popoverEmail.popover('destroy');
      this.ui.popoverPass.popover('destroy');
    }

  });

  return LoginView;
});
