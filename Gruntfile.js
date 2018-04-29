

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        purifycss: {
            options: {},
            home: {
                src: ['*.html', 'js/*.js'],
                css: ['css/*.css'],
                dest: '.tmp/home.css'
            },
            meetandeat: {
                src: ['meetandeat/*.html', 'meetandeat/js/*.js'],
                css: ['meetandeat/css/*.css'],
                dest: '.tmp/meetandeat.css'
            },
            diktaplus: {
                src: ['diktaplus/*.html', 'diktaplus/js/*.js'],
                css: ['diktaplus/css/*.css'],
                dest: '.tmp/diktaplus.css'
            }
        },

        cssmin: {
            home: {
                files: [{
                    src : ".tmp/home.css",
                    dest: 'dist/dist.min.css'
                }]
            },
            meetandeat: {
                files: [{
                    src : ".tmp/meetandeat.css",
                    dest: 'meetandeat/dist/dist.min.css'
                }]
            },
            diktaplus: {
                files: [{
                    src : ".tmp/diktaplus.css",
                    dest: 'diktaplus/dist/dist.min.css'
                }]
            }
        },

        uglify: {
            home: {
                files: {
                    'dist/dist.min.js':
                        [
                            "js/jquery-2.1.3.min.js",
                            "js/bootstrap.min.js",
                            "js/plugins.js",
                            "js/main.js"
                        ]
                }
            },
            meetandeat: {
                files: {
                    'meetandeat/dist/dist.min.js':
                        [
                            "meetandeat/js/jquery-2.1.3.min.js",
                            "meetandeat/js/tether.min.js",
                            "meetandeat/js/bootstrap.min.js"
                        ]
                }
            },
            diktaplus: {
                files: {
                    'diktaplus/dist/dist.min.js':
                        [
                            "diktaplus/js/carousel.js",
                            "diktaplus/js/jquery-2.1.3.min.js",
                            "diktaplus/js/tether.min.js",
                            "diktaplus/js/bootstrap.min.js"
                        ]
                }
            }
        },

        imagemin: {
            home: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            },
            meetandeat: {
                files: [{
                    expand: true,
                    cwd: 'meetandeat/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'meetandeat/dist/'
                }]
            },
            diktaplus: {
                files: [{
                    expand: true,
                    cwd: 'diktaplus/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'diktaplus/dist/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['purifycss','cssmin','uglify','imagemin']);

};