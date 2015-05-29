var findAndReplace = function(stringToCheck, checkWord, replacementWord) {
  stringToCheck = takePunctuation(stringToCheck, checkWord, replacementWord)[1];
  return stringToCheck.replace(checkWord, replacementWord);
};

var takePunctuation = function(stringToCheck, checkWord, replacementWord) {

  var regex = new RegExp (/[^0-9a-zA-Z\s]/g)
  var punctuationArray = stringToCheck.match(regex)
  punctuationArray.forEach(function(punctuationMark) {
   stringToCheck = stringToCheck.replace(punctuationMark, "\n")
  debugger;
  })
  return [punctuationArray, stringToCheck];
};
