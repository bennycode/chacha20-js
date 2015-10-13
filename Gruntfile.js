module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
  });

  grunt.initConfig({
    // Globals
    dir: grunt.file.readJSON('./conf/grunt/globals/dir.json'),
    pkg: grunt.file.readJSON('package.json'),
    // Tasks
    clean: require('./conf/grunt/options/clean.js'),
    jasmine: require('./conf/grunt/options/jasmine.js'),
    uglify: require('./conf/grunt/options/uglify.js'),
  });

  grunt.registerTask('test', 'jasmine:test');
  grunt.registerTask('dist', [
    'clean:dist',
    'uglify:dist'
  ]);
};
