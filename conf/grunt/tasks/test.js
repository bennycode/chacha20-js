module.exports = function(grunt) {
  grunt.registerTask('test', function() {
    grunt.task.run(['jasmine:test']);
  });
};
