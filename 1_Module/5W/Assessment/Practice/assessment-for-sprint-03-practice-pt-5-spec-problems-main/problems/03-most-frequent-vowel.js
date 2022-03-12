/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.

***********************************************************************/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}) {
  //need to access each element of the array
  // when access and element, need to iterate through word and check if letter is vowel
  // if its a vowel take a count and/or add a count into object counter

  // if(words === [])
  // {
  //  return [];
  // }

  if(words.length === 0)
  {
    if(counter === {}){return ""}
    else{
      let max = 0;
      let frequent = "";
      for(key in counter){
        if(counter[key] > max){
          max = counter[key];
          frequent = key;
        }
      }
      return frequent;
    }
  }

  let word = words.pop();
  // console.log(word)
  let letters = word.split("");
  // console.log(letters)

  letters.forEach((letter) => {
    VOWELS.forEach((vowel) => {
      if(vowel === letter && counter[letter] === undefined)
       {counter[letter] = 1}
      else if(vowel === letter)
       {counter[letter] += 1}
    });
  });

  // console.log(counter)
  return mostFrequentVowel(words, counter);


//   letters.forEach((letter) => {
//     if(counter[letter] === undefined)
//     {counter[letter] = 1}
//    else
//     {counter[letter] += 1}
//   });

// VOWELS.forEach((vowel) => {
//   if(vowel === letter)
//   {counter[letter] = 1}
//   else
//    {counter[letter] += 1}
// });

// Object.entries(counter).reduce((pVal, cVal) => pVal[1] > cVal[1] ? pVal : cVal)[0]
}

// console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
// console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'
// console.log(mostFrequentVowel(['apple', 'pear', 'melon', 'coconut', 'lime']));








// const findVowels = (myWord, counter) => {
//   myWord.split('').forEach(ele => {
//     if(VOWELS.filter(element => element === ele)[0]!== undefined){
//       if(ele in counter) {
//         counter[ele] +=1
//       }else {
//         counter[ele] =1
//       }
//     }
//   })
//   return counter
// }


// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// const mostFrequentVowel = function (words, counter = {}) {
//   if(words.length === 0){
//     if(Object.keys(counter).length === 0){
//       return ''
//     }else {
//       let myHighestVal = 0;
//       let myHighestKey = ''
//       for(let key in counter){
//         if(counter[key] > myHighestVal){
//           myHighestVal = counter[key]
//           myHighestKey = key
//         }
//       }
//       return myHighestKey
//     }
//   }

//   let myWord = words.pop()
//   counter = findVowels(myWord, counter)
//   return mostFrequentVowel(words, counter)
// }
// console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
// console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
