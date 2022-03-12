/***********************************************************************
Write a function `mostFrequentLetter(string)` that takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "
***********************************************************************/

function mostFrequentLetter(string) {
  let stringObj = {};
  let maxValue = -Infinity;
  let maxKey;

  for(let i = 0; i < string.length; i++)
  {
    let currentLetter = string[i];
    if(stringObj[currentLetter] === undefined)
    {
      stringObj[currentLetter] = 1;
    }
    else
    {
      stringObj[currentLetter] += 1;
    }
  }

  for(key in stringObj)
  {
    if(stringObj[key] >= maxValue)
    {
      maxValue = stringObj[key];
      maxKey = key;
    }
  }

  return maxKey;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentLetter;
} catch (e) {
  module.exports = null;
}
