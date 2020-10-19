// In this exercise we practice using variables and pasisng them
// to functions (as parameters) and from functions (as return values)

// in JS we work with several kinds of variables.
// There are several ways to declare varaiables, but we will generally use
// this structure:
// let name = value;

// you can also declare several variables at once:
// let name1 = value1,
//     name2 = value2,
//     name3 = value3;
// note the commas on the first 2 lines, and the semi-colon on the last

// Here are the variable types you are likely to encounter in the course:
// - strings are sequences of letters or other characters
// - numbers are treated by JS as numbers, not as strings
// - booleans are either true or false
// - arrays are collections of values, usually written as [value0, value1, value2]
// - objects are complex variables with internal structure.
// Objects are quite a bit more complex than the other variable types and we will
// discuss them later.

// the special comment blocks above each function should help VSCode correct your mistakes. 

// Problem 1
function hello() {
  return 'Hello!';
}
console.log(hello());


// Problem 2
function greeting(name) {
  let greeting = 'Hello, ' + name + '!'
  return greeting;
}
console.log(greeting('Matthew'))


// Problem 3
function returnArray (first, second, third) {
  // you can define the array using "new Array ()" or just "[ , , ]"
  let coolArray = [first, second, third];
  return coolArray
}
console.log(returnArray(1,2,3))


// Problem 4
function splitArray (thisArray) {
  // access individual elements of an array with array[0], array[1], etc.
  return thisArray[0] + ' ' + thisArray[1] + ' was a ' + thisArray[2] + '.';
}
console.log(splitArray(['Cheryl', 'Lee', 'clown']))


// Problem 5
//A.
function subtract(number1, number2) {
  let difference = number1 - number2;
  return difference
}
console.log(subtract(80,3))

//B. Write a slightly more complex number that only performs the subtraction after testing to be
// sure that both parameters are numbers. If so, return the result. If not, return the string
// "I can only subtract numbers."

function carefulSubtract (first, second) {
  if (typeof first === 'number' && typeof second === 'number'){
    let difference = first - second;
    return difference
  }
  else {
    return 'I can only subtract numbers.'
  }
}
console.log(carefulSubtract(65,24))
console.log(carefulSubtract('aaaa',24))


// Problem 6
function typeTester (unknown) {
  if (typeof unknown === 'string'){
    return unknown + ' yay!'
  } 
  else if (typeof unknown === 'number'){
    return unknown*unknown
  }
  else if (typeof unknown === 'undefined'){
    return 'Sorry, I can\'t do anything with an undefined value.'
  }
  else {
    return "I don't know how to use that kind of variable."
  }
}

let unVariable
console.log(typeTester("Cats,"))
console.log(typeTester(4))
console.log(typeTester(unVariable))
console.log(typeTester(true))

// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
// MODIFYING THIS CODE WILL ALMOST CERTAINLY CAUSE YOUR TESTS TO BREAK
// AND YOUR ASSIGNMENT TO FAIL!
var exports;

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  exports = module.exports = {};
}
else {
  exports = window.skeleton = {};
}

let functions = [hello, greeting, returnArray, splitArray,
  subtract, carefulSubtract, typeTester];

for (let i in functions) {
  exports[functions[i].name] = functions[i]; // get the name as string first!
}

// console.log(exports);
// exports.hello = hello;
// exports.greeting = greeting;
// exports.returnArray = returnArray;
// exports.splitArray = splitArray;
