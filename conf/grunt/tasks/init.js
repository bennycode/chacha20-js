module.exports = function(grunt) {
  grunt.registerTask('init', 'Retrieve project dependencies', function() {
    grunt.task.run([
      'bower:install'
    ]);
  });
};
