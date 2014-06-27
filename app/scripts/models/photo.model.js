define(
  [
    'backbone',
    'helpers/url'
  ],
  function(Backbone, Url) {

    var PhotoModel = Backbone.Model.extend({
      defaults: {
        name: '',
        file: null, // File object
        src: ''
      },

      url: Url['upload-photo'],

      save: function() {
        var dfd = Backbone.Model.prototype.save.call(this);
        var that = this;

        dfd.done(function(result) {
          console.log(result);
          that.set('src', result.src);
        });
        return dfd;
      }

    });

    return PhotoModel;
  }
);
