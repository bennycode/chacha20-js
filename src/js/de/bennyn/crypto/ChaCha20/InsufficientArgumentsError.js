/* global Error */

de.bennyn.crypto.ChaCha20.InsufficientArgumentsError = (function () {
  function Class(message) {
    this.name = 'InsufficientArgumentsError';
    this.message = message || 'Insufficient arguments in function call.';
  }

  Class.prototype = Error.prototype;

  return Class;
})();