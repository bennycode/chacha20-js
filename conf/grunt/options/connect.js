module.exports = {
  options: {
    hostname: '*',
    port: '<%= server.port.http %>',
    onCreateServer: function(server, connect, options) {
      console.log('Serving on port: ' + options.port);
    }
  },
  serve: {
    options: {
      livereload: '<%= server.port.livereload %>',
      open: 'http://localhost:<%= server.port.http %>/<%= dir.demo_code_root %>'
    }
  },
  nightwatch: {
    options: {
      livereload: false,
      open: false
    }
  }
};
