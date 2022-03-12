/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string, letter) {
	let myNumber = 0
	for(let i = 0; i < string.length; i++){
		let myLetter = string[i]
		console.log(letter, string, 'inside my helper function function')
		if(myLetter === letter){
			myNumber ++
		}
	}
	return myNumber
}
function duplicateCharMinCount(string, minCount) {
	let myResult = []
	let myObj = {}

	// for(let i = 0; i < string.length; i++){
	// 	let myLetter = string[i]
	// 	console.log(myLetter, string, 'inside my main function')
	// 	if(myObj[myLetter] === undefined && countCharacters(string, myLetter) >= minCount){

	// 		myObj[myLetter] = countCharacters(string, myLetter)
	// 	}
	// }
	// return Object.keys()



	// all in one function solution
	let myStringArray = string.split('')
	for(let i = 0; i < myStringArray.length; i++){
		let myCurrentElement = myStringArray[i]
		if(!(myCurrentElement in myObj)){
			myObj[myCurrentElement] = 1
		}else{
			myObj[myCurrentElement] ++
		}
	}
	console.log(myObj)
	for(let key in myObj){
		let myValue = myObj[key]
		if(myValue >= minCount){
			myResult.push(key)
		}
	}
	return myResult
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
// module.exports = duplicateCharMinCount;
