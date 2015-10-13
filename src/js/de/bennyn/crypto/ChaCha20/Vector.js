de.bennyn.crypto.ChaCha20.Vector = (function () {
  function Class(key, nonce, keyStream) {
    var args = Array.prototype.slice.call(arguments);
    if (args.length === 1) {
      var vector = key;
      this.key = new de.bennyn.crypto.ChaCha20.ByteRepresentation(vector.key);
      this.keyStream = vector.prefix;
      this.nonce = new de.bennyn.crypto.ChaCha20.ByteRepresentation(vector.nonce);
    } else if (args.length === 3) {
      this.key = new de.bennyn.crypto.ChaCha20.ByteRepresentation(key);
      this.keyStream = keyStream;
      this.nonce = new de.bennyn.crypto.ChaCha20.ByteRepresentation(nonce);
    } else {
      throw new de.bennyn.crypto.ChaCha20.InsufficientArgumentsError();
    }
  }

  /**
   * @returns {de.bennyn.crypto.ChaCha20.ByteRepresentation}
   */
  Class.prototype.getKey = function () {
    return this.key;
  };

  /**
   * @returns {String}
   */
  Class.prototype.getKeyStream = function () {
    return this.keyStream;
  };

  /**
   * @returns {Integer}
   */
  Class.prototype.getKeyStreamLength = function () {
    return this.keyStream.length;
  };

  /**
   * @returns {de.bennyn.crypto.ChaCha20.ByteRepresentation}
   */
  Class.prototype.getNonce = function () {
    return this.nonce;
  };

  return Class;
})();
