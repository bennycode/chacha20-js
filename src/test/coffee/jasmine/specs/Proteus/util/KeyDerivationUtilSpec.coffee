describe 'Test specification', ->
  it 'can do something', ->
    actual = Proteus.util.KeyDerivationUtil.hkdf()
    expect(actual).toBe 'OKM'
