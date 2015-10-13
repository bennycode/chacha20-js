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
    pkg: grunt.file.readJSON('package.json'),
    server_port: grunt.file.readJSON('./conf/grunt/globals/server_port.json')
  };

  var options = {
    clean: require('./conf/grunt/options/clean.js'),
    jasmine: require('./conf/grunt/options/jasmine.js'),
    nightwatch: require('./conf/grunt/options/nightwatch.js'),
    uglify: require('./conf/grunt/options/uglify.js')
  };

  grunt.util._.extend(config, globals, options);
  grunt.initConfig(config);
  grunt.loadTasks('./conf/grunt/tasks');
};
