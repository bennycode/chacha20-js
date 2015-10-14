de.bennyn.crypto.ChaCha20.ByteRepresentation = (function() {
  function Class(hexString) {
    this.plain = hexString;
    this.byteArray = de.bennyn.crypto.ChaCha20.Converter.hexStringToByteArray(this.plain);
    this.arrayBuffer = new ArrayBuffer(this.byteArray.length);
    this.bufferView = new Uint8Array(this.arrayBuffer, this.byteArray);
    for (var i = 0, length = this.byteArray.length; i < length; i++) {
      this.bufferView[i] = this.byteArray[i];
    }
  }

  /**
   * @returns {String}
   */
  Class.prototype.getPlain = function() {
    return this.plain;
  };

  /**
   * @returns {Array}
   */
  Class.prototype.getByteArray = function() {
    return this.byteArray;
  };

  /**
   * @returns {ArrayBuffer}
   */
  Class.prototype.getArrayBuffer = function() {
    return this.arrayBuffer;
  };

  /**
   * @returns {Uint8Array}
   */
  Class.prototype.getBufferView = function() {
    return this.bufferView;
  };

  return Class;
})();
