module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '<%= dir.external_libraries %>/**/*.js',
      '<%= dir.distributables %>/<%= pkg.name %>.min.js',
      '<%= dir.jasmine.test_specifications %>/**/*Spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: '<%= server.port.karma_test_runner %>',
    colors: true,
    autoWatch: true,
    singleRun: true
  },
  chrome: {
    browsers: ['Chrome']
  },
  phantom: {
    browsers: ['PhantomJS']
  }
};
