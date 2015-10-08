de.bennyn.crypto.ChaCha20.Converter = {
  /**
   * Bytes to u32 little-endian decoding.
   * @param {Uint8Array} x - Source (byte array)
   * @param {type} Converted array
   * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Typed_arrays
   */
  u8to32_le: function (x, i) {
    return x[i] | (x[i + 1] << 8) | (x[i + 2] << 16) | (x[i + 3] << 24);
  },
  u32to8_le: function (x, i, u) {
    x[i] = u;
    u >>>= 8;

    x[i + 1] = u;
    u >>>= 8;

    x[i + 2] = u;
    u >>>= 8;

    x[i + 3] = u;
  },
  rotate: function (v, c) {
    return (v << c) | (v >>> (32 - c));
  },
  // fromHex
  hexStringToByteArray: function (hex) {
    hex.replace(' ', '');

    var out = [];
    var len = hex.length;
    var w = '';

    for (var i = 0; i < len; i += 2) {
      w = hex[i];
      if (((i + 1) >= len) || typeof hex[i + 1] === 'undefined') {
        w += '0';
      } else {
        w += hex[i + 1];
      }
      out.push(parseInt(w, 16));
    }

    return out;
  },
  bytesEqual: function (a, b) {
    var dif = 0;

    if (a.length !== b.length) {
      return 0;
    }

    for (var i = 0; i < a.length; i++) {
      dif |= (a[i] ^ b[i]);
    }

    dif = (dif - 1) >>> 31;

    return (dif & 1);
  },
  byteArrayToHex: function (bytes) {
    var hex = [];
    var i = 0;

    while (i < bytes.length) {
      hex.push((bytes[i] >>> 4).toString(16));
      hex.push((bytes[i] & 0xF).toString(16));
      i++;
    }

    return hex.join('');
  },
  hexToByteArray: function (hex) {
    var bytes = [];
    var counter = 0;

    while (counter < hex.length) {
      bytes.push(parseInt(hex.substr(counter, 2), 16));
      counter += 2;
    }

    return bytes;
  },
  stringToHex: function (input) {
    var character = undefined;
    var i = 0;
    var string = '';
    var tempLength = input.length;

    while (i < tempLength) {
      character = input.charCodeAt(i);
      string += character.toString(16);
      i += 1;
    }
    return string;
  },
  stringToByteArray: function (string) {
    var byte_array = [];

    for (var index in string) {
      byte_array.push(string.charCodeAt(index));
    }

    return byte_array;
  },
  /*
   * @see https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String?hl=en
   */
  stringToArrayBufferView: function (string) {
    var arrayBuffer = new ArrayBuffer(string.length * 2);
    var bufferView = new Uint16Array(arrayBuffer);
    var i = 0;
    var stringLength = string.length;

    while (i < stringLength) {
      bufferView[i] = string.charCodeAt(i);
      i++;
    }
    return bufferView;
  },
  arrayBufferToString: function (buffer) {
    return String.fromCharCode.apply(null, buffer);
  },
  concatenateArrayBuffers: function () {
    var args, array_buffer_view, concatenated_buffer, first_buffer, index, return_buffer, second_buffer;
    args = Array.prototype.slice.call(arguments);
    return_buffer = args[0];
    if (args.length > 1) {
      first_buffer = args.shift();
      var concatenated_buffer = undefined;
      for (index in args) {
        array_buffer_view = args[index];
        second_buffer = array_buffer_view;
        concatenated_buffer = new window[first_buffer.constructor.name](first_buffer.byteLength + second_buffer.byteLength);
        concatenated_buffer.set(first_buffer, 0);
        concatenated_buffer.set(second_buffer, first_buffer.byteLength);
        first_buffer = concatenated_buffer;
      }
      return_buffer = concatenated_buffer;
    }
    return return_buffer;
  }
};