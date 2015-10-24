module.exports = function(grunt) {
  // Helpers
  var headLessTest = function() {
    var scriptLanguage = grunt.task.current.name.split('_')[2];
    grunt.task.run([
      'build_main_' + scriptLanguage,
      'build_test_' + scriptLanguage,
      'jasmine:test_headless_' + scriptLanguage
    ]);
  };

  var browserTest = function(browserName) {
    if (browserName) {
      var scriptLanguage = grunt.task.current.name.split('_')[2];
      var testName = 'test_browser';
      grunt.config('karma.' + testName + '.browsers', [browserName]);

      grunt.task.run([
        'build_main_' + scriptLanguage,
        'build_test_' + scriptLanguage,
        'karma:' + testName
      ]);
    } else {
      grunt.log.writeln('Please specify a browser like "Chrome" or "Firefox"');
    }
  };

  // CoffeeScript
  grunt.registerTask('test_browser_coffee', browserTest);
  grunt.registerTask('test_headless_coffee', headLessTest);

  grunt.registerTask('test_spec_coffee', function(testName) {
    if (testName) {
      grunt.task.run([
        'newer:coffee:build_main_coffee',
        'newer:coffee:build_test_coffee'
      ]);

      var nextTask = 'test_headless_coffee';
      var value = '<%= dir.build_test_coffee_jasmine_specs %>/' + testName + 'Spec.js';

      grunt.config('jasmine.' + nextTask + '.options.specs', value);
      grunt.task.run('jasmine:' + nextTask);
    }
  });

  // JavaScript
  grunt.registerTask('test_browser_js', browserTest);
  grunt.registerTask('test_headless_js', headLessTest);

  grunt.registerTask('test_spec_js', function(testName) {
    if (testName) {
      var nextTask = 'test_headless_js';
      var value = '<%= dir.source_test_js_jasmine_specs %>/' + testName + 'Spec.js';

      grunt.config('jasmine.' + nextTask + '.options.specs', value);
      grunt.task.run(nextTask);
    }
  });


  // TypeScript
  grunt.registerTask('test_browser_ts', browserTest);
  grunt.registerTask('test_headless_ts', headLessTest);

  grunt.registerTask('test_spec_ts', function(testName) {
    if (testName) {
      grunt.task.run([
        'newer:ts:build_main_ts',
        'newer:ts:build_test_ts'
      ]);

      var nextTask = 'test_headless_ts';
      var value = '<%= dir.build_test_ts_jasmine_specs %>/' + testName + 'Spec.js';

      grunt.config('jasmine.' + nextTask + '.options.specs', value);
      grunt.task.run('jasmine:' + nextTask);
    }
  });

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
