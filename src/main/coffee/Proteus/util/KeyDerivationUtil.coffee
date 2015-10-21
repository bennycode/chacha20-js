window.Proteus ?= {}
window.Proteus.util ?= {}

Proteus.util.KeyDerivationUtil = do ->
  ###
  HMAC-based Key Derivation Function

  @param salt [Uint8Array, String] Salt
  @param input [Uint8Array, String] Initial Keying Material (IKM)
  @param info [Uint8Array, String] Key Derivation Data (Info)
  @param length [Integer] Length of the derived key in bytes (L)

  @return [string] Output Keying Material (OKM)
  ###
  hkdf: (salt, input, info, length) ->
    return 'OKM'
