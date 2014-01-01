module.exports = {
    options: {
        port: 9002,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '127.0.0.1'
    },
    livereload: {
        options: {
            open: true,
            base: [
                '.tmp',
                '<%= cfg.dist %>'
            ]
        }
    },
    test: {
        options: {
            base: [
                '.tmp',
                'test',
                '<%= cfg.dist %>'
            ]
        }
    },
    dist: {
        options: {
            open: true,
            base: '<%= cfg.dist %>',
            livereload: false
        }
    }
};
