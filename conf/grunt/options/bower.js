module.exports = {
  init: {
    options: {
      cleanTargetDir: true,
      cleanBowerDir: true,
      install: true,
      layout: 'byComponent',
      targetDir: '<%= dir.external_libraries %>',
      verbose: true,
      bowerOptions: {
        forceLatest: true,
        production: false
      }
    }
  }
};
