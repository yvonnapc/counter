describe('counter', function() {
  it("counts up to a given first number in multiples of the secondary number input", function () {
    expect(countTo(20, 5)).to.equal([5,10,15,20]);
  });
});
