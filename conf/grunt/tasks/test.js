module.exports = function(grunt) {
  grunt.registerTask('test', 'Run unit tests', function(is_headless) {
    (is_headless !== undefined) ? is_headless = is_headless : is_headless = false;
    grunt.log.writeln('Run tests with Karma: ' + is_headless);

    var tasks = [
      'dist'
    ];

    if (is_headless === 'true') {
      tasks.push('karma:phantom');
    } else {
      tasks.push('karma:chrome');
    }

    grunt.task.run(tasks);
  });
};
