/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:

obj1 = { orange: "juice", apple: "sauce", sauce: "pan" };
console.log(keyValueDuplicates(obj1)); // ["sauce"]

obj2 = { big: "foot", foot: "ball", ball: "boy", boy: "scout" };
console.log(keyValueDuplicates(obj2)); // ["foot", "ball", "boy"]

obj3 = { pizza: "pie", apple: "pie", pumpkin: "pie" };
console.log(keyValueDuplicates(obj3)); // []
***********************************************************************/

function keyValueDuplicates(obj) {
  let keyArray = Object.keys(obj);
  let valuesArray = Object.values(obj);
  let objKeyCounts = {}
  let resultArray = [];

  for(let i = 0; i < keyArray.length; i++)
  {
    let currentElement = keyArray[i];
    for(let j = 0; j < valuesArray.length; j++)
    {
      if((currentElement === valuesArray[j]) )
      {
        resultArray.push(currentElement);
      }
    }

  //   if(objKeyCounts[currentElement] === undefined)
  //   {
  //     objKeyCounts[currentElement] = 1;
  //   }
  //   else
  //   {
  //     objKeyCounts[currentElement] += 1;
  //   }
  // }

  // for(key in objKeyCounts)
  // {
  //   if (objKeyCounts[key] > 1)
  //   {
  //     resultArray.push(key);
  //   }
  }

  return resultArray;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = keyValueDuplicates;
} catch (e) {
  module.exports = null;
}
