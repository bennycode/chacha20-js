module.exports = function(grunt) {
  // CoffeeScript
  grunt.registerTask('build_demo_coffee', function() {
    grunt.task.run([
      'clean:build_demo_coffee',
      'coffee:build_demo_coffee'
    ]);
  });

  grunt.registerTask('build_main_coffee', function() {
    grunt.task.run([
      'clean:build_main_coffee',
      'coffee:build_main_coffee'
    ]);
  });

  grunt.registerTask('build_test_coffee', function() {
    grunt.task.run([
      'clean:build_test_coffee',
      'coffee:build_test_coffee'
    ]);
  });

  // JavaScript
  var noOperation = function() {
    grunt.log.writeln('No operation');
  };

  grunt.registerTask('build_demo_js', noOperation);
  grunt.registerTask('build_main_js', noOperation);
  grunt.registerTask('build_test_js', noOperation);

  // TypeScript
  grunt.registerTask('build_main_ts', function() {
    grunt.task.run([
      'clean:build_main_ts',
      'ts:build_main_ts'
    ]);
  });

  // Default
  grunt.registerTask('build', function(option) {
    grunt.log.writeln('=== BUILD ===');

    if (option === undefined) {
      option = 'main';
    }

    var parts = [
      'build',
      option,
      grunt.config('language')
    ];

    grunt.task.run(parts.join('_'));
  });
};
