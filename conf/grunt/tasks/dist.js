module.exports = function (grunt) {
  grunt.registerTask('dist', function () {
    grunt.task.run([
      'clean:dist',
      'uglify:dist'
    ]);
  });
};
