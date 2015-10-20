de.bennyn.crypto.ChaCha20.Context = (function() {
  /**
   * Represents the context for an encryption using ChaCha20.
   * @constructor
   * @memberOf de.bennyn.crypto.ChaCha20
   */
  function Context(key, nonce, counter) {
    this.input = new Uint32Array(16);

    if (counter === undefined) {
      counter = 0;
    }

    // https://tools.ietf.org/html/draft-irtf-cfrg-chacha20-poly1305-01#section-2.3
    this.input[0] = 1634760805;
    this.input[1] = 857760878;
    this.input[2] = 2036477234;
    this.input[3] = 1797285236;
    this.input[4] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 0);
    this.input[5] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 4);
    this.input[6] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 8);
    this.input[7] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 12);
    this.input[8] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 16);
    this.input[9] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 20);
    this.input[10] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 24);
    this.input[11] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(key, 28);

    // be compatible with the reference ChaCha depending on the nonce size
    if (nonce.length === 12) {
      this.input[12] = counter;
      this.input[13] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(nonce, 0);
      this.input[14] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(nonce, 4);
      this.input[15] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(nonce, 8);
    } else {
      this.input[12] = counter;
      this.input[13] = 0;
      this.input[14] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(nonce, 0);
      this.input[15] = de.bennyn.crypto.ChaCha20.Converter.u8to32_le(nonce, 4);
    }
  }

  // chacha20_round
  Context.prototype.quarterRound = function(x, a, b, c, d) {
    x[a] += x[b];
    x[d] = de.bennyn.crypto.ChaCha20.Converter.rotate(x[d] ^ x[a], 16);

    x[c] += x[d];
    x[b] = de.bennyn.crypto.ChaCha20.Converter.rotate(x[b] ^ x[c], 12);

    x[a] += x[b];
    x[d] = de.bennyn.crypto.ChaCha20.Converter.rotate(x[d] ^ x[a], 8);

    x[c] += x[d];
    x[b] = de.bennyn.crypto.ChaCha20.Converter.rotate(x[b] ^ x[c], 7);
  };

  /**
   * @param {Uint8Array} destination - Reference to the storage for the ciphertext
   * @param {Uint8Array} source - Text to be encrypted
   * @param {number} length - Length of the unencrypted text (source)
   */
  Context.prototype.encrypt = function(destination, source, length) {
    var x = new Uint32Array(16);
    var output = new Uint8Array(64);
    var i = 0;
    var dpos = 0;
    var spos = 0;

    while (length > 0) {
      for (i = 16; i--;) x[i] = this.input[i];

      for (i = 20; i > 0; i -= 2) {
        this.quarterRound(x, 0, 4, 8, 12);
        this.quarterRound(x, 1, 5, 9, 13);
        this.quarterRound(x, 2, 6, 10, 14);
        this.quarterRound(x, 3, 7, 11, 15);
        this.quarterRound(x, 0, 5, 10, 15);
        this.quarterRound(x, 1, 6, 11, 12);
        this.quarterRound(x, 2, 7, 8, 13);
        this.quarterRound(x, 3, 4, 9, 14);
      }

      for (i = 16; i--;) {
        x[i] += this.input[i];
      }

      for (i = 16; i--;) {
        de.bennyn.crypto.ChaCha20.Converter.u32to8_le(output, 4 * i, x[i]);
      }

      this.input[12] += 1;

      if (!this.input[12]) {
        this.input[13] += 1;
      }

      if (length <= 64) {
        for (i = length; i--;) {
          destination[i + dpos] = source[i + spos] ^ output[i];
        }
        return;
      }

      for (i = 64; i--;) {
        destination[i + dpos] = source[i + spos] ^ output[i];
      }

      length -= 64;
      spos += 64;
      dpos += 64;
    }
  };

  Context.prototype.generateKeyStream = function(destination, length) {
    for (var i = 0; i < length; ++i) {
      destination[i] = 0;
    }

    this.encrypt(destination, destination, length);
  };

  return Context;
})();

