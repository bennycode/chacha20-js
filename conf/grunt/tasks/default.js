module.exports = function(grunt) {
  grunt.registerTask('default', 'Test app, transpile code and run development environment', function() {
    grunt.task.run([
      'test:false',
      'dist',
      'sass',
      'dev'
    ]);
  });
};
