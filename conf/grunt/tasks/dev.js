module.exports = function(grunt) {
  grunt.registerTask('dev', 'Run development environment', function() {
    grunt.task.run([
      'connect:serve',
      'watch'
    ]);
  });
};
