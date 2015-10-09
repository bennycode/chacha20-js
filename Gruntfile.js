module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
  });

  grunt.initConfig({
    // Globals
    dir: grunt.file.readJSON('./conf/grunt/globals/dir.json'),
    pkg: grunt.file.readJSON('package.json'),
    // Tasks
    jasmine: require('./conf/grunt/tasks/jasmine.js')
  });

  grunt.registerTask('test', ['jasmine:test']);
};
