// 1.
// function sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
// }

// try{
//   let res = sum(null);
//   console.log(res);
// }
// catch(error){
//   if(error instanceof TypeError){
//    error.message = "Cannot take length or sum of an array of null"
//    console.error(error.name + ": " + error.message);
//   }
// }

// try{
//   let res = sum(null);
//   console.log(res);
// }
// catch(error){
//   error.message = "Cannot take length or sum of an array of null"
//   console.error(error.name + ": " + error.message);
// }

// 2.

// function sayName(name) {
//   if(typeof name === "string"){
//   console.log(name);}
//   else{
//     throw new TypeError("Invalid Name! Must be a string!")
//   }
// }

// // tests
// try{
// sayName("Alex");
// sayName(1);
// }
// catch(error){
//   console.error(error.message)
// }



// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet()
}
catch(error){
  console.log("Hello World!")
}
