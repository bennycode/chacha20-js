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
});
