var findAndReplace = function(stringToCheck, checkWord, replacementWord) {
  var punctuationArray = takePunctuation(stringToCheck)[0];
  stringToCheck = takePunctuation(stringToCheck)[1];
  debugger;
  var finalString = stringToCheck.replace(checkWord, replacementWord);
  if (punctuationArray !== null) {
    return replacePunctuation(punctuationArray, finalString);
  } else {
    return finalString;
  }
};

var takePunctuation = function(stringToCheck) {
  var regex = new RegExp (/[^0-9a-zA-Z\s]/g)
  var punctuationArray = stringToCheck.match(regex)
  if (punctuationArray !== null) {
    punctuationArray.forEach(function(punctuationMark) {
      stringToCheck = stringToCheck.replace(punctuationMark, "\n")
    })
  }
  return [punctuationArray, stringToCheck];
};

var replacePunctuation = function(punctuationArray, stringToCheck) {
  punctuationArray.forEach(function(punctuationMark) {
   stringToCheck = stringToCheck.replace("\n", punctuationMark)
  })
  return stringToCheck;
}
