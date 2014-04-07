define([
  'marionette',
  'jst!./_index.html',
  'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false',
  'underscore'
  ],
  function(Marionette, Tpl, googleMap, _) {
  'use strict';

  var GMapView = Marionette.ItemView.extend({
    template: Tpl,
    className: 'gmap-widget',

    ui: {
      map: '.gmap'
    },

    map: null,

    showMarker: null,
    marker: null,

    initialize: function(options) {
      this.showMarker = options.showMarker;
    },

    onShow: function() {
      var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(this.model.get('location').x, this.model.get('location').y) //(-34.397, 150.644)
      };

      this.map = new google.maps.Map(this.$el.find('.gmap')[0], mapOptions);

      if (!this.showMarker) {
        this.marker = new google.maps.Marker({
          position: mapOptions.center,
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: 'images/gmap/beachflag.png',
          draggable: true,
          title: 'Here it is!'
        });

        google.maps.event.addListener(this.marker, 'click', _.bind(this._toggleBounce, this));
      }
    },

    _toggleBounce: function() {
      if (this.marker.getAnimation() !== google.maps.Animation.BOUNCE) {
        this.marker.setAnimation(google.maps.Animation.BOUNCE);
      } else {
        this.marker.setAnimation(google.maps.Animation.DROP);
      }
    }

  });

  return GMapView;
});
