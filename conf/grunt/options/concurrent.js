module.exports = {
  options: {
    logConcurrentOutput: true
  },
  nightwatch: {
    tasks: [
      "connect:serve:keepalive",
      "nightwatch:default"
    ]
  }
};
