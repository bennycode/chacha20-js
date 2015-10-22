module.exports = function(grunt) {
  grunt.config('task', 'build');
  grunt.config('option', 'main');
  grunt.config('language', 'coffee');

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

  // TypeScript
  grunt.registerTask('build_main_ts', function() {
    grunt.task.run([
      'clean:build_main_ts',
      'ts:build_main_ts'
    ]);
  });

  // Default
  grunt.registerTask('build', function() {
    var parts = [
      grunt.config('task'),
      grunt.config('option'),
      grunt.config('language')
    ];

    grunt.task.run(parts.join('_'));
  });
};
