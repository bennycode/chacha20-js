module.exports = {
  options: {
    logConcurrentOutput: true
  },
  nightwatch: {
    tasks: [
      "connect:nightwatch:keepalive",
      "nightwatch:default"
    ]
  }
};
