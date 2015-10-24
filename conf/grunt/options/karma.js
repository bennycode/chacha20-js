module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    files: [],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    coverageReporter: {
      dir: '<%= dir.reports_coverage %>',
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
  test_chrome_js: {
    browsers: ['Chrome'],
    preprocessors: {},
    reporters: ['progress'],
    coverageReporter: {},
    files: [{
      src: [
        '<%= dir.lib %>/**/*.js',
        '<%= dir.source_main_js %>/**/*.js',
        '<%= dir.source_test_js_jasmine_specs %>/**/*Spec.js'
      ]
    }]
  },
  test_firefox_js: {
    browsers: ['Firefox'],
    preprocessors: {},
    reporters: ['progress'],
    coverageReporter: {},
    files: [{
      src: [
        '<%= dir.lib %>/**/*.js',
        '<%= dir.source_main_js %>/**/*.js',
        '<%= dir.source_test_js_jasmine_specs %>/**/*Spec.js'
      ]
    }]
  }
};
