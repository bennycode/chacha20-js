module.exports = function (grunt) {
  grunt.registerTask('dist', function () {
    grunt.task.run([
      'eslint:src',
      'clean:dist',
      'uglify:dist'
    ]);
  });
};
