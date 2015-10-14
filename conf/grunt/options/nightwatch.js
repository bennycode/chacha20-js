module.exports = {
  options: {
    standalone: true,
    jar_url: 'https://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar',
    globals_path: '<%= dir.nightwatch.config %>/globals.js',
    src_folders: ['<%= dir.nightwatch.tests %>'],
    output_folder: '<%= dir.nightwatch.report %>',
    "test_settings": {
      "default": {
        "launch_url": "https://app.wire.com/auth/#login",
        "selenium_host": "localhost",
        "selenium_port": '<%= server.port.selenium %>',
        "silent": true,
        "use_xpath": true,
        "desiredCapabilities": {
          "browserName": "firefox",
          "javascriptEnabled": true,
          "acceptSslCerts": true
        },
        "screenshots": {
          "enabled": true,
          "on_failure": true,
          "on_error": true,
          "path": '<%= dir.nightwatch.screenshots %>'
        }
      }
    },
    "selenium": {
      "host": "127.0.0.1",
      "port": '<%= server.port.selenium %>',
      "cli_args": {
        "webdriver.chrome.driver": "",
        "webdriver.ie.driver": ""
      }
    }
  }
};
