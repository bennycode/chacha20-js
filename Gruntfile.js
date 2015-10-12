module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
  });

  grunt.initConfig({
    // Globals
    dir: grunt.file.readJSON('./conf/grunt/globals/dir.json'),
    pkg: grunt.file.readJSON('package.json'),
    // Tasks
    clean: require('./conf/grunt/tasks/clean.js'),
    jasmine: require('./conf/grunt/tasks/jasmine.js'),
    uglify: require('./conf/grunt/tasks/uglify.js'),
  });

  grunt.registerTask('code-test', 'jasmine:test');
  grunt.registerTask('code-dist', [
    'clean:dist',
    'uglify:dist'
  ]);
};
