define(function() {

    var root = 'mocks';

    return {
        'posts': root + '/posts.json',
        getRoot: function() {
            return root;
        }
    };
});
