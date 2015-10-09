module.exports = {
  test: {
    src: [
      '<%= dir.source_code %>/**/*.js'
    ]
  },
  options: {
    specs: ['<%= dir.test_specifications %>/**/*Spec.js'],
    vendor: []
  }
};
