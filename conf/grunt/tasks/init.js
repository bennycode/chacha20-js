module.exports = function (grunt) {
  grunt.registerTask('init', function () {
    grunt.task.run([
      'bower:install'
    ]);
  });
};
