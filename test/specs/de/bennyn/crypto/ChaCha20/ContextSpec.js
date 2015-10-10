/* global expect */

// https://tools.ietf.org/html/draft-agl-tls-chacha20poly1305-00#section-7
describe('ChaCha20Poly1305 Test Vectors', function () {
  it('handles 256-bit keys with 64-bit nonces', function () {
    var testVector = {
      key: '0000000000000000000000000000000000000000000000000000000000000000',
      nonce: '0000000000000000',
      prefix: '76b8e0ada0f13d90405d6ae55386bd28bdd219b8a08ded1aa836efcc8b770dc7da41597c5157488d7724e03fb8d84a376a43b8f41518a11cc387b669'
    };

    var vector = new de.bennyn.crypto.ChaCha20.Vector(testVector);
    var context = new de.bennyn.crypto.ChaCha20.Context(vector);
    context.generateKeyStream();

    expect(context.getKeyStreamAsHex()).toBe(testVector.prefix);
  });
});
