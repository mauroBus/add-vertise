define(
  [
    'backbone',
    'helpers/url'
  ],
  function(Backbone, Url) {
    'use strict';

    var UserModel = Backbone.Model.extend({
      defaults: {
        email: '',
        password: '',
        passwordRepeat: '',
        firstName: '',
        lastName: '',
        role: ''
      },

      url: Url['login'],

      validation: {
        password: [
          {
            required: true,
            msg: 'please enter a password'
          },
          {
            minLength: 5,
            msg: 'Password length must be higer than 5'
          }
        ],
        passwordRepeat: {
          equalTo: 'password',
          msg: 'the password does not match'
        },
        email: [
          {
            required: true,
            msg: 'Please enter an email address'
          },
          {
            pattern: 'email',
            msg: 'The email address is not valid'
          }
        ]
      }

    });

    return UserModel;
  }
);
