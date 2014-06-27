define([
    'backbone',
    'helpers/url'
  ],
  function(Backbone, Url) {

    var ItemModel = Backbone.Model.extend({
      defaults: {
        id: -1,
        userName: 'no user name',
        userId: -1,
        text: 'No advertise text.',
        fullImgs: [],
        publishDate: 0,
        location: {
          x: 0,
          y: 0
        },
        capacity: 0,
        bedrooms: 0,
        bathrooms: 0,
        minimumStay: 0,
        cleaningFeePrice: 0,
        possibleCapacities: ['1', '2', '3', '4', '5', '6', '7', '8+']
      },

      url: Url['itemDetails'],

      fetch: function() {
        if (this.get('userName') === 'Mirta') {
          this.url = 'mocks/my-dptos-details.json';
        }

        return Backbone.Model.prototype.fetch.apply(this, {
          id: this.id
        });
      },

      parse: function(data) {
        // formating the publish date.
        data['publishDate'] = new Date(data['publishDate']);
        return data;
      }

    });

    return ItemModel;
  }
);
