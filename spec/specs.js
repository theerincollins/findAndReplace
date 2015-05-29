describe('findAndReplace', function(){
  it("will replace a given word in a given string with another given word", function(){
    expect(findAndReplace("is that a big dog?", "big", "small")).to.equal("is that a small dog\n");
  });

});

describe('takePunctuation', function(){
  it("will return the symbol of puncuation in a string", function(){
    expect(takePunctuation("hello! there", "big", "dog")).to.eql([["!"], "hello\n there"])
  })

  it("will return an array of symbols of puncuation in a string", function(){
    expect(takePunctuation("hello! there:", "big", "dog")).to.eql([["!", ":"], "hello\n there\n"])
  })

  it("will replace the puncuation with new lines", function(){
    expect(takePunctuation("hello! there:", "big", "dog")).to.eql([["!", ":"], "hello\n there\n"])
  })
})
