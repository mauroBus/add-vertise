define(
  [
    'jquery',
    'nprogress'
  ],
  function($, NProgress) {

    $(document).ajaxStart(function() {
        NProgress.start();
      })
      .ajaxStop(function() {
        NProgress.done();
      });

    return {
      start: NProgress.start,
      done: NProgress.done
    };
  }
);
