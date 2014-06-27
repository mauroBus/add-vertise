define(function() {

  var mode = 'mock', // { 'mock' || 'dev' }

    root = mode === 'mock' ? 'mocks' : 'services',

    urls = {
      mock: {
        'advertises': root + '/advertises.json',
        'locations': root + '/locations.json',
        'itemDetails': root + '/item-details.json',
        'login': root + '/user.json',
        'upload-photo': 'services/upload-photo.php'
      },
      dev: {
        'advertises': root + '/advertises',
        'locations': root + '/locations',
        'itemDetails': root + '/item',
        'login': root + '/user',
        'upload-photo': root + '/upload-photo.php'
      }
    };

  return {
    getRoot: function() {
        return root;
    },
    'advertises': urls[mode]['advertises'],
    'locations': urls[mode]['locations'],
    'itemDetails': urls[mode]['itemDetails'],
    'login': urls[mode]['login'],
    'upload-photo': urls[mode]['upload-photo']
  };

});
