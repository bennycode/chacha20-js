var plainKey = '0000000000000000000000000000000000000000000000000000000000000000';
var plainNonce = '0000000000000000';
var message = de.bennyn.crypto.ChaCha20.Converter.stringToUint8Array('testing');

var key = de.bennyn.crypto.ChaCha20.Converter.hexStringToByteArray(plainKey);
var nonce = de.bennyn.crypto.ChaCha20.Converter.hexStringToByteArray(plainNonce);
var destination = new Uint8Array(message.length);

var context = new de.bennyn.crypto.ChaCha20.Context(key, nonce, 0);
context.encrypt(destination, message, message.length);
console.log('Result (ChaCha20): ' + de.bennyn.crypto.ChaCha20.Converter.byteArrayToHex(destination));
