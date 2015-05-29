describe('findAndReplace', function(){
  it("will replace a given word in a given string with another given word", function(){
    expect(findAndReplace("is that a big dog?", "big", "small")).to.equal("is that a small dog?");
  });

});

describe('puncuation', function(){
  it("will return the index and symbol of puncuation in a string", function(){
    expect(puncuation("hello! there", "big", "dog")).to.eql(["!"])
  })
})
