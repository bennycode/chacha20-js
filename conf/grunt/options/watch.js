module.exports = {
  options: {
    livereload: true
  },
  html: {
    files: [
      '<%= dir.demo_code_root %>/**/*.html'
    ]
  },
  js: {
    files: [
      '<%= dir.source_code.js %>/**/*.js'
    ]
  }
};
