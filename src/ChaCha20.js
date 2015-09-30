function ChaCha20(key, nonce) {
  this.key = key;

  function load32(x, i) {
    return x[i] | (x[i + 1] << 8) | (x[i + 2] << 16) | (x[i + 3] << 24);
  }

  this.context = {
    input: new Array(16)
  };

  this.context.input[0] = 1634760805;
  this.context.input[1] = 857760878;
  this.context.input[2] = 2036477234;
  this.context.input[3] = 1797285236;
  this.context.input[12] = 0;
  this.context.input[13] = 0;
  this.context.input[14] = load32(nonce, 0);
  this.context.input[15] = load32(nonce, 4);

  for (var i = 0; i < 8; i++) {
    this.context.input[i + 4] = load32(key, i * 4);
  }
}

ChaCha20.prototype.generateKeyStream = function (dst, src) {
  var buf = new Array(64);
  var ctx = this.context;
  var dpos = 0;
  var i = 0;
  var len = this.key.length;
  var spos = 0;
  var x = new Array(16);

  function rotl32(v, c) {
    return v << c | v >>> 32 - c;
  }

  function round(x, a, b, c, d) {
    x[a] += x[b];
    x[d] = rotl32(x[d] ^ x[a], 16);
    x[c] += x[d];
    x[b] = rotl32(x[b] ^ x[c], 12);
    x[a] += x[b];
    x[d] = rotl32(x[d] ^ x[a], 8);
    x[c] += x[d];
    x[b] = rotl32(x[b] ^ x[c], 7);
  }

  function store32(x, i, u) {
    x[i] = u & 0xff;
    u >>>= 8;
    x[i + 1] = u & 0xff;
    u >>>= 8;
    x[i + 2] = u & 0xff;
    u >>>= 8;
    x[i + 3] = u & 0xff;
  }

  while (len > 0) {
    for (i = 16; i--; )
      x[i] = ctx.input[i];
    for (i = 20; i > 0; i -= 2) {
      round(x, 0, 4, 8, 12);
      round(x, 1, 5, 9, 13);
      round(x, 2, 6, 10, 14);
      round(x, 3, 7, 11, 15);
      round(x, 0, 5, 10, 15);
      round(x, 1, 6, 11, 12);
      round(x, 2, 7, 8, 13);
      round(x, 3, 4, 9, 14);
    }
    for (i = 16; i--; )
      x[i] += ctx.input[i];
    for (i = 16; i--; )
      store32(buf, 4 * i, x[i]);

    ctx.input[12] += 1;
    if (!ctx.input[12]) {
      ctx.input[13] += 1;
    }
    if (len <= 64) {
      for (i = len; i--; ) {
        dst[i + dpos] = src[i + spos] ^ buf[i];
      }
      return;
    }
    for (i = 64; i--; ) {
      dst[i + dpos] = src[i + spos] ^ buf[i];
    }
    len -= 64;
    spos += 64;
    dpos += 64;
  }
};