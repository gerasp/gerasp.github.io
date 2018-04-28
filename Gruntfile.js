

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: '.tmp',
                    ext: 'dist.min.css'
                }]
            }
        },

        purifycss: {
            options: {},
            target: {
                src: ['*.html', 'js/*.js'],
                css: ['.tmp/*.css'],
                dest: 'dist.min.css'
            },
        },

        uglify: {
            my_target: {
                files: {
                    'dist.min.js': 'js/*.js'
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['cssmin','purifycss','uglify']);

};