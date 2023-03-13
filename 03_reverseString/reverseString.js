const reverseString = function(phrase) {
  let stLen = phrase.length ;
  const stringArray = [];
  for (let i = 0; i < stLen; i++) {
    stringArray[i] = phrase.charAt(i);
  };
  let reversePhrase = '';
  for (let i = stLen; i > 0; i--){
    let j = i - 1;
    reversePhrase += stringArray[j];
  } 
  return reversePhrase;

};

// Do not edit below this line
module.exports = reverseString;
