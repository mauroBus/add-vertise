define([
  'backbone',
  'jquery',
  'marionette',
  'helpers/url'
], function(Backbone, $, Marionette, Url) {
  'use strict';

  var app = new Marionette.Application();

  // Register composer as part of the application namespace
  // app.composer = composer()
  //   .register('main', new MainLayout())
  //   .register('body', new BodyLayout())
  //   .register('top-nav', new TopNavLayout());

  // Retrieve initial app information
  //Set Role based on current logged in user
  app.addInitializer(function() {

    // Backbone History initialization
    Backbone.history.start({
      pushState: false,
      root: Url.getRoot()
    });

  });

  // Routers instanciation
  app.addInitializer(function() {
    // var LandingRouter = RoleFilterRouter.extend({
    //   controller: new LandingController(this),
    //   appRoutes: {
    //     '': 'landing'
    //   }
    // });

    // var SetupRouter = RoleFilterRouter.extend({
    //   controller: new SetupController(this),
    //   appRoutes: {
    //     'setup/overall/deal': 'setup/overall/deal',
    //     'setup/overall/target-acquirer': 'setup/overall/target-acquirer',
    //     'setup/overall/synergy': 'setup/overall/synergy',
    //     'setup/company-a': 'setup/company-a',
    //     'setup/company-b': 'setup/company-b',
    //     'setup/baseline': 'setup/baseline'
    //   }
    // });

    // var TopDownRouter = RoleFilterRouter.extend({
    //   controller: new TopDownController(this),
    //   appRoutes: {
    //     'top-down': 'top-down'
    //   }
    // });

    // var BaselineRouter = RoleFilterRouter.extend({
    //   controller: new BaselineController(this),
    //   appRoutes: {
    //     'baseline/terminology-mapping': 'baseline/terminology-mapping',
    //     'baseline/terminology-mapping-tree': 'baseline/terminology-mapping-tree',
    //     'baseline/company-a': 'baseline/company-a',
    //     'baseline/company-b': 'baseline/company-b',
    //     'baseline/baseline-output': 'baseline/baseline-output',
    //     'baseline/baseline-output/cost-view': 'baseline/baseline-output/cost-view',
    //     'baseline/baseline-output/headcount-view': 'baseline/baseline-output/headcount-view'
    //   }
    // });
    // //@TODO check for routes not used
    // var BottomUpRouter = RoleFilterRouter.extend({
    //   controller: new BottomUpController(this),
    //   appRoutes: {
    //     'bottom-up': 'bottom-up',
    //     'bottom-up/initiative/:id': 'bottom-up/initiative',
    //     'bottom-up/input-sheet/:id': 'bottom-up/input-sheet',
    //     'bottom-up/input-sheet/nonheadcount/:id': 'bottom-up/input-sheet/nonheadcount',
    //     'bottom-up/summary-run-rate/:id': 'bottom-up/summary-run-rate',
    //     'bottom-up/summary-run-rate/consolidated/:id': 'bottom-up/summary-run-rate/consolidated',
    //     'bottom-up/summary-yoy/:id': 'bottom-up/summary-yoy',
    //     'bottom-up/summary-yoy/consolidated/:id': 'bottom-up/summary-yoy/consolidated',
    //     'bottom-up/all-summary': 'bottom-up/all-summary',
    //     'bottom-up(/*splat)': 'bottom-up-reload'
    //   }
    // });

    // var TrackAndReportRouter = RoleFilterRouter.extend({
    //   controller: new TrackAndReportController(this),
    //   appRoutes: {
    //     'track-report': 'track-report'
    //   }
    // });

    // this.landingRouter = new LandingRouter();
    // this.setupRouter = new SetupRouter();
    // this.topDownRouter = new TopDownRouter();
    // this.baselineRouter = new BaselineRouter();
    // this.bottomUpRouter = new BottomUpRouter();
    // this.trackAndReportRouter = new TrackAndReportRouter();

    // app.manager.register('landing', this.landingRouter)
    //   .register('setup', this.setupRouter)
    //   .register('top-down', this.topDownRouter)
    //   .register('baseline', this.baselineRouter)
    //   .register('bottom-up', this.bottomUpRouter)
    //   .register('track-report', this.trackAndReportRouter);
  });

  // Attach default layout
  app.addInitializer(function() {
    // var self = this,
    //   composer = this.composer,
    //   main = composer.layout('main'),
    //   body = composer.layout('body'),
    //   topNav = composer.layout('top-nav'),
    //   functionalityCollection = new FunctionalityCollection(),
    //   badgetsModel = new BadgetsModel();

    // this.addRegions({
    //   main: 'main'
    // });

    // // Draw main layout
    // app.main.show(main);

    // // Draw main header
    // $.when(this.models.user.ready, badgetsModel.fetch())
    //   .done(function() {

    //     main.header.show(new HeaderView({
    //       model: self.models.user,
    //       badgetsModel: badgetsModel,
    //       composer: composer,
    //       modalRegion: app.composer.region('main/modals')
    //     }));
    //   });

    // // Fetch menu configuration
    // $.when(functionalityCollection.fetch(), badgetsModel.ready)
    //   .done(function() {

    //     // Draw left navigation
    //     main.sidebar.show(new SidebarView({
    //       collection: functionalityCollection,
    //       badgetsModel: badgetsModel
    //     }));
    //   });

    // main.body.show(body);
    // body.top.show(topNav);

    // topNav.center.show(new TopNavigation({
    //   model: this.models.user,
    //   statusModel: this.models.synergyStatus
    // }));
  });

  //To prevent href anchor from navigating, add data-bypass attribute in html
  app.addInitializer(function() {
    // $(document).on('click', 'a[data-bypass]', function(evt) {
    //   evt.preventDefault();
    // });
  });

  // app.fetchSynergyStatus = function() {
  //   if (!this.models.synergyStatus) {
  //     this.models.synergyStatus = new SynergyStatusModel();
  //   }
  //   //When initializing the app, this status is fetched for the first time.
  //   //After first fetch, the flag isFirstURLAccess is set to true.
  //   //When first time navigating to an url, there is no need to fetch this status again
  //   if (!app.isFirstURLAccess) {
  //     this.models.synergyStatus.fetch();
  //   }

  //   return this.models.synergyStatus;
  // };
  // app.fetchUser = function() {
  //   if (!this.models.user) {
  //     this.models.user = new UserModel();
  //   }
  //   this.models.user.fetch();
  //   return this.models.user;
  // };

  return app;
});
