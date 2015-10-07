de.bennyn.crypto.ChaCha20.Key = (function () {
  function Key(bytes) {
    this.bytes = bytes;
  }

  Key.prototype.getBytes = function () {
    return this.bytes;
  };

  return Key;
})();