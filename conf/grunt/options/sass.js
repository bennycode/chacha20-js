module.exports = {
  demo: {
    files: [{
      expand: true,
      cwd: '<%= dir.demo_code.style.scss %>',
      src: ['**/*.scss'],
      dest: '<%= dir.demo_code.style.css %>',
      ext: '.css'
    }]
  }
};
