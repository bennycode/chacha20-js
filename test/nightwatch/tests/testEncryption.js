module.exports = {
  'Enter login credentials': function (browser) {
    var data = browser.globals;
    browser
      .url(browser.launch_url)
      .setValue("//*[@data-uie-name='enter-email']", data.email)
  },
  'Submit login credentials': function (browser) {
    browser
      .click("//*[@data-uie-name='do-sign-in']")
      .end();
  }
};
