module.exports = function (grunt) {
  grunt.registerTask('default', function () {
    grunt.task.run([
      'test',
      'dist'
    ]);
  });
};
