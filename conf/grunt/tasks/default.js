module.exports = function(grunt) {
  grunt.registerTask('default', 'Test app, transpile code and run development environment', function() {
    /**
     grunt.task.run([
     'eslint:src',
     'test:phantom:false',
     'dist',
     'sass',
     'dev'
     ]);
     **/
    grunt.task.run([
      'init',
      // Check
      'check:demo',
      'check:main',
      'check:test',
      // Build
      'build:demo',
      'build:main',
      'build:test',
      // Test
      'test:headless'
    ]);
  });
};
