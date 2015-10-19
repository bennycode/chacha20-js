module.exports = function(grunt) {
  grunt.registerTask('test', 'Run unit tests', function(engine, create_coverage) {
    (create_coverage !== undefined) ? create_coverage = create_coverage : create_coverage = false;
    grunt.log.writeln('Run tests with engine: ' + engine);
    grunt.log.writeln('Create code coverage: ' + create_coverage);

    var tasks = [
      'dist'
    ];

    var goal = 'karma:' + engine;

    if (create_coverage === 'true') {
      goal += '_coverage';
      tasks.unshift('clean:code_coverage_reports');
    }

    tasks.push(goal);
    grunt.task.run(tasks);
  });
};
