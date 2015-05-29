var findAndReplace = function(stringToCheck, checkWord, replacementWord) {

  var punctuationArray = takePunctuation(stringToCheck)[0];
  stringToCheck = takePunctuation(stringToCheck)[1];
  var re = new RegExp(checkWord,"ig")
  var finalString = stringToCheck.replace(re, replacementWord);
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

$(document).ready(function(){
  $("#string-form").submit(function(event){
    var inputString = $("input#input-string").val()
    var findWord = $("input#find-word").val()
    var replacementWord = $("input#replacement-word").val()
    var finalString = findAndReplace(inputString, findWord, replacementWord)
    $("#final-string").text(finalString)

    $("#results").show()

    event.preventDefault();
  });
});
