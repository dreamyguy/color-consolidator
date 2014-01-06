var _ = require('underscore');

var files = {
    top: {
        'src/js/js_top.js': [
            'app/js/jquery-2.0.3.min.js',
            'app/js/angular.min.js',
            'app/js/angular-route.min.js',
            'app/js/angular-resource.min.js',
            'app/js/modernizr.custom.49435.js',
            'app/js/modernizr.ios.js',
            'app/js/bootstrap.min.js'
        ]
    },
    bottom: {
        'src/js/js_bottom.js': [
            'app/js/app.js',
            'app/js/webfont-loader.js'
        ]
    }
};

function all() {
    'use strict';
    var allfiles = {},
        i = {};

    for (i in files) {
        _.extend(allfiles, files[i]);
    }
    return allfiles;
}

// Grunt configuration settings
module.exports.config = {
    options: {
        mangle:   false,
        report:   'min' // 'false', 'min' or 'gzip' Default: false
    },
    dist: {
        options: {
            banner:   '// <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>\n\n',
        },
        files: (all())
    },
    dev: {
        options: {
            // compress: false,
            // beautify: true
        },
        files: (all())
    }
};
