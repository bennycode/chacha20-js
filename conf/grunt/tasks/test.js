module.exports = function(grunt) {
  // Helpers
  var headLessTest = function() {
    var scriptLanguage = grunt.task.current.name.split('_')[2];
    grunt.task.run([
      'build:main:' + scriptLanguage,
      'build:test:' + scriptLanguage,
      'jasmine:test_headless_' + scriptLanguage
    ]);
  };

  // CoffeeScript
  grunt.registerTask('test_headless_coffee', headLessTest);

  // JavaScript
  grunt.registerTask('test_headless_js', headLessTest);

  grunt.registerTask('test_spec_js', function(testName) {
    if (testName) {
      var value = '<%= dir.source_test_js_jasmine_specs %>/' + testName + 'Spec.js';
      var nextTask = 'test_headless_js';
      grunt.config('jasmine.' + nextTask + '.options.specs', value);
      grunt.task.run(nextTask);
    }
  });

  // TypeScript
  grunt.registerTask('test_headless_ts', headLessTest);

  // Default
  grunt.registerTask('test', function(option, scriptLanguage) {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    if (option === undefined) {
      option = 'headless';
    }

    var parts = [
      grunt.task.current.name,
      option,
      scriptLanguage || grunt.config('script')
    ];

    grunt.task.run(parts.join('_'));
  });
};
