module.exports = {
  build_demo_ts: {
    src: ['<%= dir.source_demo_ts %>/**/*'],
    outDir: '<%= dir.build_demo_ts %>'
  },
  build_main_ts: {
    src: ['<%= dir.source_main_ts %>/**/*'],
    outDir: '<%= dir.build_main %>'
  },
  build_test_ts: {
    src: ['<%= dir.source_test_ts %>/**/*'],
    outDir: '<%= dir.build_test_ts %>'
  }
};
