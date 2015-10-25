module.exports = function(grunt) {
  grunt.registerTask('default', 'Test app, transpile code and run development environment', function() {
    var styleLanguage = grunt.config('style');

    grunt.task.run([
      'init',
      // Check scripts
      'check:demo',
      'check:main',
      'check:test',
      // Check styles
      'check:demo:' + styleLanguage,
      'check:main:' + styleLanguage,
      // Build scripts
      'build:demo',
      'build:main',
      'build:test',
      // Test scripts
      'test:specs'
    ]);
  });
};
