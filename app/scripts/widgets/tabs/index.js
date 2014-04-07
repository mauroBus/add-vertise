define([
  'marionette',
  'jst!./_index.html'
  ],
  function(Marionette, Tpl) {
  'use strict';

  var TabsView = Marionette.Layout.extend({
    template: Tpl,
    className: 'tabs-widget',

    ui: {
      tabsWrapper: '.js-nav-tabs'
    },

    tabs: null,

    /**
     * @param  {Object} options The view's options.
     * @param  {Array} options.tabs The tabs to show.
     * @param  {String} options.tabs.name A tab name.
     * @param  {Constructor Function} options.tabs.constructor The tab view's constructor.
     */
    initialize: function(options) {
      this.tabs = options.tabs;
    },

    regions: function(options) {
      var regs = {};

      _.each(options.tabs, function(tab, index) {
        regs['region' + tab.name] = '.js-' + index + '-region';
      });

      return regs;
    },

    serializeData: function() {
      return {
        tabs: this.tabs
      }
    },

    onRender: function() {
      var view, params;

      // creating each view for each tab.
      _.each(this.tabs, function(tab, index) {
        params = _.isFunction(tab.params) ? tab.params() : (tab.params || {});
        // creating the view:
        view = new tab.constructor(params);

        // by default show only the first view:
        if (!index) {
          this['region' + tab.name].show(view);
        }

        this._bindViewActivation(view, index, 'region' + tab.name);
      }, this);
    },

    onShow: function() {
      // this.ui.tabsWrapper.tab('show');
      // show the first tab:
      this.$el.find('.js-0-region').tab('show');
    },

    /**
     * Shows a view in its region only when it is clicked the corresponding view's tab
     *  and just once.
     * @param  {Object} view   A Marionette view.
     * @param  {Integer} index  the view's index.
     * @param  {String} regionName the view's DOM region's name.
     */
    _bindViewActivation: function(view, index, regionName) {
      var that = this;

      this.$el.find('a[data-tab-id="' + index + '"]').one('shown.bs.tab', function() {
        that[regionName].show(view);
      });
    }

  });

  return TabsView;
});
