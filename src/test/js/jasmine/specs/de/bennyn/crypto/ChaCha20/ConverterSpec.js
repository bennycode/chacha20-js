describe('String conversion', function() {
  it('can convert an ASCII string into an array of 8-bit unsigned integers', function() {
    var input = 'plaintext';
    var actual = de.bennyn.crypto.ChaCha20.Converter.stringToUint8Array(input);
    var expected = new Uint8Array([112, 108, 97, 105, 110, 116, 101, 120, 116]);
    expect(actual).toEqual(expected);
  });

  it('can convert an ASCII string into an array of 16-bit unsigned integers', function() {
    var input = 'plaintext';
    var actual = de.bennyn.crypto.ChaCha20.Converter.stringToUint16Array(input);
    var expected = new Uint16Array([112, 108, 97, 105, 110, 116, 101, 120, 116]);
    expect(actual).toEqual(expected);
  });

  it('can convert an UTF-16 character into an array of 8-bit unsigned integers', function() {
    var input = '€';
    var actual = de.bennyn.crypto.ChaCha20.Converter.stringToUint8Array(input);
    var expected = new Uint8Array([172]);
    expect(actual).toEqual(expected);
  });

  it('can convert an UTF-16 character into an array of 16-bit unsigned integers', function() {
    var input = '€';
    var actual = de.bennyn.crypto.ChaCha20.Converter.stringToUint16Array(input);
    var expected = new Uint16Array([8364]);
    expect(actual).toEqual(expected);
  });

  it('can convert hex strings filled with zeros into a byte array', function() {
    var input = '0000000000000000';
    var actual = de.bennyn.crypto.ChaCha20.Converter.hexStringToByteArray(input);
    var expected = [0, 0, 0, 0, 0, 0, 0, 0];
    expect(actual).toEqual(expected);
    expect(actual.length).toEqual(input.length / 2);
  });

  it('can convert hex strings with lower-case and upper-case into a byte array', function() {
    var input = '0F0A2d';
    var actual = de.bennyn.crypto.ChaCha20.Converter.hexStringToByteArray(input);
    var expected = [15, 10, 45];
    expect(actual).toEqual(expected);
  });

  xit('can convert hex strings with spaces into a byte array', function() {
    var input = '0A 2D 3F 00';
    var actual = de.bennyn.crypto.ChaCha20.Converter.hexStringToByteArray(input);
    var expected = [10, 45, 63, 0];
    expect(actual).toEqual(expected);
  });
});
