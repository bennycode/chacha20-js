module.exports = function(grunt) {
  grunt.registerTask('dev', function() {
    grunt.task.run([
      'connect:serve',
      'watch'
    ]);
  });
};
