module.exports = {
  serve: {
    options: {
      hostname: '*',
      livereload: '<%= server.port.livereload %>',
      open: 'http://localhost:<%= server.port.http %>/<%= dir.demo_code_root %>',
      port: '<%= server.port.http %>',
      onCreateServer: function(server, connect, options) {
        console.log('Serving on port: ' + options.port);
      }
    }
  }
};
