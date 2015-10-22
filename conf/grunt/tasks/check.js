module.exports = function(grunt) {
  // CoffeeScript
  grunt.registerTask('check_demo_coffee', function() {
    grunt.task.run('coffeelint:check_demo_coffee');
  });

  grunt.registerTask('check_main_coffee', function() {
    grunt.task.run('coffeelint:check_main_coffee');
  });

  grunt.registerTask('check_test_coffee', function() {
    grunt.task.run('coffeelint:check_test_coffee');
  });

  // JavaScript
  grunt.registerTask('check_demo_js', function() {
    grunt.task.run('eslint:check_demo_js');
  });

  grunt.registerTask('check_main_js', function() {
    grunt.task.run('eslint:check_main_js');
  });

  grunt.registerTask('check_test_js', function() {
    grunt.task.run('eslint:check_test_js');
  });

  // TypeScript
  grunt.registerTask('check_demo_ts', function() {
    grunt.task.run([]);
  });

  grunt.registerTask('check_main_ts', function() {
    grunt.task.run([]);
  });

  grunt.registerTask('check_test_ts', function() {
    grunt.task.run([]);
  });

  // Default
  grunt.registerTask('check', function(option) {
    grunt.log.writeln('=== CHECK ===');

    if (option === undefined) {
      option = 'main';
    }

    var parts = [
      'check',
      option,
      grunt.config('script')
    ];

    grunt.task.run(parts.join('_'));
  });
};
