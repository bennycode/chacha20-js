module.exports = function (grunt) {
  grunt.registerTask('dist', function () {
    grunt.task.run([
      'init',
      'eslint:src',
      'clean:dist',
      'uglify:dist'
    ]);
  });
};
