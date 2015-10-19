module.exports = function(grunt) {
  // TODO: Pure jasmine test task can be replaced with Karma which uses PhantomJS as engine
  grunt.registerTask('test', 'Run unit tests', function(test_with_karma) {
    (test_with_karma !== undefined) ? is_headless = test_with_karma : is_headless = false;
    grunt.log.writeln('Run tests with Karma: ' + test_with_karma);

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
