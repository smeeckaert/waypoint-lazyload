module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                "separator": ";"
            },
            my_target: {
                files: {
                    "dist/lazyload.min.js": [
                        "src/js/*.js",
                        "src/js/**/*.js",
                        "!src/js/loader/inview.js"
                    ],
                    "dist/waypoint-lazyload.min.js": [
                        "node_modules/waypoints/lib/noframework.waypoints.js",
                        "node_modules/waypoints/lib/shortcuts/inview.js",
                        "src/js/*.js",
                        "src/js/**/*.js"
                    ]
                }
            }
        },
        watch: {
            uglify: {
                files: ['src/**/*.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);

};