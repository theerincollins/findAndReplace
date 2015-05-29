var findAndReplace = function(stringToCheck, checkWord, replacementWord) {
  return stringToCheck.replace(checkWord, replacementWord);
};

var puncuation = function(stringToCheck, checkWord, replacementWord) {
  var regex = new RegExp (/[^0-9a-zA-Z\s]/g)
  var puncuation = stringToCheck.match(regex)
  return puncuation;
};
