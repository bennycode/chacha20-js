module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '<%= dir.external_libraries %>/**/*.js',
      '<%= dir.source_code.js %>/**/*.js',
      '<%= dir.jasmine.test_specifications %>/**/*Spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    coverageReporter: {
      dir: '<%= dir.code_coverage_reports %>',
      reporters: [{
        type: 'html',
        subdir: 'html'
      }]
    },
    port: '<%= server.port.karma_test_runner %>',
    colors: true,
    autoWatch: true,
    singleRun: true
  },
  chrome: {
    browsers: ['Chrome'],
    preprocessors: {},
    reporters: ['progress'],
    coverageReporter: {}
  },
  chrome_coverage: {
    browsers: ['Chrome'],
    preprocessors: {'<%= dir.source_code.js %>/**/*.js': ['coverage']},
    reporters: ['progress', 'coverage']
  },
  phantom: {
    browsers: ['PhantomJS']
  },
  phantom_coverage: {
    browsers: ['PhantomJS'],
    preprocessors: {'<%= dir.source_code.js %>/**/*.js': ['coverage']},
    reporters: ['progress', 'coverage']
  }
};
