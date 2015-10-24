module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '<%= dir.lib %>/**/*.js',
      '<%= dir.build_main %>/**/*.js',
      '<%= dir.build_test %>/**/*.js',
      '<%= dir.source_main_js %>/**/*.js',
      '<%= dir.source_test_js_jasmine_specs %>/**/*Spec.js'
    ],
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
  test_browser: {
    browsers: ['Chrome'],
    coverageReporter: {}
  }
};
