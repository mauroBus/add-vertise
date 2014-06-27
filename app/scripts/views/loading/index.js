define(
  [
    'nprogress'
  ],
  function(NProgress) {

    var progessCount = 0;

    return {
      start: function() {
        if (progressCount === 0) {
          NProgress.start();
        }
        progressCount++;
      },
      done: function() {
        progressCount--;
        if (progressCount === 0) {
          NProgress.done();
        }
      }
    };
  }
);
