module.exports = {
  test: {
    src: [
      '<%= dir.source_code.js %>/**/*.js'
    ]
  },
  options: {
    specs: ['<%= dir.jasmine.test_specifications %>/**/*Spec.js'],
    vendor: []
  }
};
