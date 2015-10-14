module.exports = function(grunt) {
  grunt.registerTask('test', function(test_with_karma) {
    grunt.log.writeln('Run unit tests with Karma: ' + test_with_karma);
    if (test_with_karma) {
      grunt.task.run([
        'dist',
        'karma:jasmine'
      ]);
    } else {
      grunt.task.run('jasmine:test');
    }
  });
};
