describe('Zip code validation', () => {
  it('recognizes a valid zip code', function () {
    var validator = new ZipCodeValidator();
    var actual = validator.isAcceptable('13088');
    expect(actual).toBe(true);
  });
});
