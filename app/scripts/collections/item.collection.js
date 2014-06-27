define([
    'backbone.paginator',
    'models/item.model',
    'helpers/url'
  ],
  function(BackbonePaginator, ItemModel, Url) {

    var ItemCollection = Backbone.Paginator.requestPager.extend({
      model: ItemModel,

      // url: Url['advertises'],

      paginator_core: {
        // the type of the request (GET by default)
        type: 'GET',

        // the type of reply (jsonp by default)
        dataType: 'json',

        // the URL (or base URL) for the service
        // if you want to have a more dynamic URL, you can make this a function
        // that returns a string
        url: Url['advertises']
      },

      paginator_ui: {
        // the lowest page index your API allows to be accessed
        firstPage: 0,

        // which page should the paginator start from
        // (also, the actual page the paginator is on)
        currentPage: 0,

        // how many items per page should be shown
        perPage: 5,

        // a default number of total pages to query in case the API or
        // service you are using does not support providing the total
        // number of pages for us.
        // 10 as a default in case your service doesn't return the total
        totalPages: 10
      },

      server_api: {
        // the query field in the request
        query: '',
        // number of items to return per request/page
        perPage: function() {
          return this.perPage;
        },
        page: function() {
          return this.currentPage;
        },
        prov: function() {
          return this.prov;
        },
        city: function() {
          return this.city;
        }
      },

      fetch: function(options) {
        this.prov = options.prov;
        this.city = options.city;
        return Backbone.Paginator.requestPager.prototype.fetch.call(this, options);
      },

      parse: function(response) {
        this.totalPages = response.totalPages;
        return response.results;
      }

      // fetch: function(options) {
      //   var opt = {
      //     data: {
      //       prov: options.prov,
      //       city: options.city
      //     }
      //   };

      //   return Backbone.Collection.prototype.fetch.call(this, opt);
      // }

    });

    return ItemCollection;
  }
);
