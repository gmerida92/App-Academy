function isFive(num) {
  if (num === 5) {return true;}

  return false;
}

function isOdd(number) {
  if(typeof number !== "number") {
   throw new Error("number is not type of Number") ;
  }

  if (number % 2 !== 0) {return true;}

  return false;
}

function myRange(min, max, step = 1) {
  let newArray = [];
  for(let i = min; i <= max; i += step) {
    newArray.push(i);
  }
  return newArray;
}


module.exports = { isFive, isOdd, myRange };
