define([
    'backbone',
    'underscore',
    'helpers/url'
  ],
  function(Backbone, _, Url) {

    var HomeModel = Backbone.Model.extend({
      defaults: {
        locations: [],
        ids: {}
      },

      url: Url['locations'],

      parse: function(locations) {
        var ids = {};
        _.each(locations, function(loc) {
          ids[loc.name] = loc.id;
        });

        return {
          locations: _.map(locations, function(loc) {
            return loc.name;
          }),
          ids: ids
        };
      }

    });

    return HomeModel;
  }
);
