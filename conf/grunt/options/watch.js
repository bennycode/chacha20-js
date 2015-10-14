module.exports = {
  options: {
    livereload: true
  },
  html: {
    files: [
      '<%= dir.demo_code %>/**/*.html'
    ]
  },
  js: {
    files: [
      '<%= dir.source_code.js %>/**/*.js'
    ]
  }
};
