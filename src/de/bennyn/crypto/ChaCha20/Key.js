de.bennyn.crypto.ChaCha20.Key = (function () {
  /**
   * @param {Uint8Array} bytes - The key as byte array.
   */
  function Key(bytes) {
    this.bytes = bytes;
  }

  Key.prototype.getBytes = function () {
    return this.bytes;
  };

  return Key;
})();