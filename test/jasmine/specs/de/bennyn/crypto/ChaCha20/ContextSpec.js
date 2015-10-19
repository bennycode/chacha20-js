/* global expect */

// https://tools.ietf.org/html/draft-agl-tls-chacha20poly1305-00#section-7
describe('ChaCha20Poly1305 Test Vectors', function() {
  it('is compliant with IETF test vectors', function() {
    var vectors = {
      "A": {
        key: '0000000000000000000000000000000000000000000000000000000000000000',
        nonce: '0000000000000000',
        prefix: '76b8e0ada0f13d90405d6ae55386bd28bdd219b8a08ded1aa836efcc8b770dc7da41597c5157488d7724e03fb8d84a376a43b8f41518a11cc387b669'
      },
      "B": {
        key: '0000000000000000000000000000000000000000000000000000000000000001',
        nonce: '0000000000000000',
        prefix: '4540f05a9f1fb296d7736e7b208e3c96eb4fe1834688d2604f450952ed432d41bbe2a0b6ea7566d2a5d1e7e20d42af2c53d792b1c43fea817e9ad275'
      },
      "C": {
        key: '0000000000000000000000000000000000000000000000000000000000000000',
        nonce: '0000000000000001',
        prefix: 'de9cba7bf3d69ef5e786dc63973f653a0b49e015adbff7134fcb7df137821031e85a050278a7084527214f73efc7fa5b5277062eb7a0433e445f41e3'

      },
      "D": {
        key: '0000000000000000000000000000000000000000000000000000000000000000',
        nonce: '0100000000000000',
        prefix: 'ef3fdfd6c61578fbf5cf35bd3dd33b8009631634d21e42ac33960bd138e50d32111e4caf237ee53ca8ad6426194a88545ddc497a0b466e7d6bbdb004'
      }
    };

    for (var key in vectors) {
      // Setup Vector
      var vector = vectors[key];
      var vectorObject = new de.bennyn.crypto.ChaCha20.Vector(vector);
      // Setup context
      var key = vectorObject.getKey().getBufferView();
      var nonce = vectorObject.getNonce().getBufferView();
      var context = new de.bennyn.crypto.ChaCha20.Context(key, nonce);
      // Generate key-stream
      var length = vectorObject.getKeyStream().getBufferView().length;
      var destination = new Uint8Array(length);
      context.generateKeyStream(destination, length);
      var keyStream = de.bennyn.crypto.ChaCha20.Converter.byteArrayToHex(destination);
      // Validation
      expect(keyStream).toContain(vector.prefix);
    }
  });
});

describe('Encryption', function() {
  it('can encrypt a text message with key and nonce being array buffers', function() {
    // Context
    var key = new ArrayBuffer(32);
    var nonce = new ArrayBuffer(8);
    var counter = 0;
    var context = new de.bennyn.crypto.ChaCha20.Context(key, nonce, counter);

    // Encryption
    var message = de.bennyn.crypto.ChaCha20.Converter.stringToUint8Array('testing');
    var destination = new Uint8Array(message.length);
    context.encrypt(destination, message, message.length);
    var cipherText = de.bennyn.crypto.ChaCha20.Converter.byteArrayToHex(destination);

    // Validation
    var expected = '02dd93d9c99f5a';
    expect(cipherText).toBe(expected);
  });
});
