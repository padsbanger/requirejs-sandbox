'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      html: {
        files: ['*.html', '*.js', 'app/*.js' ],
        options: {
          livereload: {
            port: 9000
          }
        },
      }
    },

    // The actual grunt server settings
    connect: {
      server: {
        options: {
          port: 1337,
          hostname: '',
          livereload: 9000,
          open: true
        }
      }
    }
  });



  grunt.registerTask('serve', function() {
    grunt.task.run([
      'connect:server',
      'watch'
    ]);
  });
};