describe('findAndReplace', function(){
  it("will replace a given word in a given string with another given word", function(){
    expect(findAndReplace("is that a big dog dog?", "dog", "cat")).to.equal("is that a big cat cat?");
  });

  it("will replace a given word in a given string with another given word and return with punctuation", function(){
    expect(findAndReplace("is that a big dog?", "dog", "cat")).to.equal("is that a big cat?");
  });

  it("will replace a given word in a given string with another given word no matter the case of letters", function(){
    expect(findAndReplace("is that a big Dog?", "dog", "cat")).to.equal("is that a big cat?");
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

describe('replacePunctuation', function(){
  it('will replace \n with the appropriate punctuation', function() {
    expect(replacePunctuation([",", "!"], "free\n ice cream\n")).to.equal("free, ice cream!")
  })
})
