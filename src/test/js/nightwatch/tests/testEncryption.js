module.exports = {
  'Enter test vector': function(browser) {
    var data = browser.globals;
    browser
      .url(browser.launch_url)
      .setValue("//*[@data-uie-name='enter-key']", data.vectors.A.key)
      .setValue("//*[@data-uie-name='enter-nonce']", data.vectors.A.nonce)
      .setValue("//*[@data-uie-name='enter-key-stream']", data.vectors.A.prefix)
    ;
  },
  'Run encryption': function(browser) {
    browser
      .click("//*[@data-uie-name='run-encryption']")
      .end();
  }
};
