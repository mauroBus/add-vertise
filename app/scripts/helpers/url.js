define(function() {

  var mode = 'mock', // { 'mock' || 'dev' }
    root = mode === 'mock' ? 'mocks' : '??? to dev?',
    urls = {
      mock: {
        'advertises': root + '/advertises.json',
        'locations': root + '/locations.json'
      },
      dev: {
        'advertises': root + '/advertises',
        'locations': root + '/locations'
      }
    };

  return {
    getRoot: function() {
        return root;
    },
    'advertises': urls[mode]['advertises'],
    'locations': urls[mode]['locations']
  };

});
