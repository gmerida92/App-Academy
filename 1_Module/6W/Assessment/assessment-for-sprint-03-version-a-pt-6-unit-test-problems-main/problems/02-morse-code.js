/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.


Example:

let code = ['dot', 'dash', 'dot'];

morseCode(code);
// print 'dot'
// pause for 100ms
// print 'dash'
// pause for 300ms
// print 'dot'
// pause for 100ms

***********************************************************************/

const { dot } = require("mocha/lib/reporters");

function morseCode(code) {
  if(code.length === 0){
    return;
  }

  let signal = code.shift();
  console.log(signal);

  if(signal === "dot")
  {
    delay = 100;
  }
  else
  {
    delay = 300;
  }


  setTimeout(() => {
    morseCode(code);
  }, delay)
}


// let code = ['dot', 'dash', 'dot'];

// morseCode(code);
// // print 'dot'
// // pause for 100ms
// // print 'dash'
// // pause for 300ms
// // print 'dot'
// // pause for 100ms
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = morseCode;
} catch {
  module.exports = null;
}
