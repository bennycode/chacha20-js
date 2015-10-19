module.exports = function(grunt) {
  grunt.registerTask('test-e2e', 'Run end-to-end tests', function() {
    grunt.task.run([
      'concurrent:nightwatch'
    ]);
  });
};
