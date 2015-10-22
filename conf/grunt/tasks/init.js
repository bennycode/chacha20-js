module.exports = function(grunt) {
  grunt.registerTask('init', function() {
    grunt.log.writeln('=== INIT ===');

    grunt.task.run([
      'bower:install'
    ]);
  });
};
