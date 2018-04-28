

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: [{
                    src : ["css/bootstrap.css",
                        "css/main.css",
                        "css/vendor.css",
                        "css/custom.css"],
                    dest: '.tmp/dist.min.css'
                }]
            }
        },

        purifycss: {
            options: {},
            target: {
                src: ['*.html', 'js/*.js'],
                css: ['.tmp/*.css'],
                dest: 'css/dist.min.css'
            },
        },

        uglify: {
            my_target: {
                files: {
                    'js/dist.min.js':
                        ["js/jquery-2.1.3.min.js",
                            "js/bootstrap.min.js",
                            "js/plugins.js",
                            "js/main.js"]
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['cssmin','purifycss','uglify']);

};