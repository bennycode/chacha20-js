module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> v<%= pkg.version %> */'
  },
  dist: {
    files: {
      '<%= dir.distributables %>/<%= pkg.name %>.min.js': [
        '<%= dir.source_code %>/**/*.js'
      ]
    },
    options: {
      screwIE8: true,
      sourceMap: true
    }
  }
};
