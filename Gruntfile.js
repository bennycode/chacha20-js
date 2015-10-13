module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    pattern: [
      'grunt-*',
      '!grunt-template-jasmine-istanbul'
    ]
  });

  var config = {};

  var globals = {
    dir: grunt.file.readJSON('./conf/grunt/globals/dir.json'),
    pkg: grunt.file.readJSON('package.json')
  };

  var options = {
    clean: require('./conf/grunt/options/clean.js'),
    jasmine: require('./conf/grunt/options/jasmine.js'),
    uglify: require('./conf/grunt/options/uglify.js')
  };

  grunt.util._.extend(config, globals, options);
  grunt.initConfig(config);
  grunt.loadTasks('./conf/grunt/tasks');
};
