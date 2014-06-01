module.exports = {
    src : [
        'app/js/**/*.js',
        // exclude angular, jquery and node from jasmine
        '!app/js/angular*.js',
        '!app/js/jquery*.js',
        '!app/js/node*.js'
    ],
    options : {
        specs : 'app/js/**/*spec.js',
        helpers: [
            'app/js/jquery*.js',
            'app/js/angular.min.js'
        ]
    }
};
