module.exports = {
  source_code: {
    src: [
      // TODO: Turn the source code into a global variable
      '<%= dir.source_code.js %>/**/*.js'
    ],
    options: {
      destination: '<%= dir.documentation %>'
    }
  }
};
