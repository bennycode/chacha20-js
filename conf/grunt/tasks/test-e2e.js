module.exports = function(grunt) {
  grunt.registerTask('test-e2e', function() {
    grunt.task.run([
      'concurrent:nightwatch'
    ]);
  });
};
