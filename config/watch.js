// This task watches files and runs the appropriate 
// tasks when files are changed.
module.exports = {

    grunt: {
        files: ['Gruntfile.js', 'config/*.js'],
        tasks: ['jshint:grunt']
    },

    sass: {
        files: 'app/sass/**/*.scss',
        tasks: ['compass:dev']
    },

    js: {
        files: ['config/*.js', 'app/js/**/*.js'],
        tasks: ['jshint', 'jasmine', 'uglify:dev']
    },

    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= cfg.dist %>/*.html',
            '<%= cfg.dist %>/{,*/}*.css',
            '<%= cfg.dist %>/scripts/{,*/}*.js',
            '<%= cfg.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
        ]
    }

};
