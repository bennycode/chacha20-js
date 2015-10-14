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
  },
  sass: {
    files: [
      '<%= dir.demo_code.style.scss %>/**/*.scss'
    ],
    options: {
      livereload: true
    },
    tasks: ['sass:demo']
  }
};
