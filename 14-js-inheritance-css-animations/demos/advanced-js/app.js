'use strict';

// Uncomment the console.log messages to see what these methods are doing!
// Note: some of the strings in the console.log messages may be inaccurate depending on which exact lines are commented out

//////// ARRAY METHODS ////////

var numArray = [1, 42, 720, 2, 5, 8, 54];

var stringArray = ['Sam', 'Allie', 'Dustin', 'Amanda', 'Ron'];

console.log('PUSH METHOD');
// PUSH
// INPUT: value(s)
// WHAT IT DOES: adds value(s) at the end of the array, in the order in which they were passed in
// RETURNS: the length of the new array

// add another element to an array:
// console.log('numArray before pushing 9', numArray);
// numArray.push(9);
// console.log('numArray after pushing 9', numArray);

// console.log('stringArray before pushing Demi', stringArray);
// stringArray.push('Demi');
// console.log('stringArray after pushing Demi', stringArray);

// what is actually going on though?
// this method is adding the new element at the index equal to the array's length

// console.log('stringArray before showing what is going on', stringArray);
// stringArray[stringArray.length] = 'Gary';
// console.log('stringArray after showing what is going on', stringArray);



// console.log('POP METHOD');
// POP
// WHAT IT DOES: removes the last element from an array
// RETURNS: the element that was removed (or undefined if array is empty)

// remove the last element from an array
// console.log('stringArray before pop', stringArray);
// stringArray.pop();
// console.log('stringArray after first pop', stringArray);
// console.log('log message of stringArray.pop() **this is the second pop** to show return value: ', stringArray.pop());

// console.log('numArray before first pop', numArray);
// numArray.pop();
// console.log('numArray after first pop', numArray);
// console.log('log message of numArray.pop() **this is the second pop** to show return value: ', numArray.pop());



// console.log('UNSHIFT METHOD');
// UNSHIFT
// INPUT: value(s)
// WHAT IT DOES: adds value(s) at the beginning of the array, in the order in which they were passed in
// RETURNS: the length of the new array

// console.log('numArray before unshifting 83', numArray);
// numArray.unshift(83);
// console.log('numArray after unshifting 83', numArray);

// console.log('stringArray before pushing Bird', stringArray);
// stringArray.unshift('Bird');
// console.log('stringArray after pushing Bird', stringArray);



// console.log('SHIFT METHOD');
// SHIFT
// WHAT IT DOES: similar to pop, except it is removing the first element from an array
// RETURNS: the element that was removed (or undefined if array is empty)

// remove the first element from an array
// console.log('stringArray before shift', stringArray);
// stringArray.shift();
// console.log('stringArray after first shift', stringArray);
// console.log('log message of stringArray shift() **this is the second shift** to show return value: ', stringArray.shift());

// console.log('numArray before first shift', numArray);
// numArray.shift();
// console.log('numArray after first shift', numArray);
// console.log('log message of numArray shift() **this is the second shift** to show return value: ', numArray.shift());


//////// STRING METHODS ////////

var exampleString = 'This is an example string to use for this demo!';

// console.log('INCLUDES METHOD');
// INCLUDES
// INPUT: a string (think of this as a substring)
// WHAT IT DOES: checks to see the string includes the substring
// RETURNS: Boolean

// check if substrings are present in the string

// console.log('Does it include "Th"?', exampleString.includes('Th'));
// console.log('Does it include "The"?', exampleString.includes('The'));

// ** important note: strings are iterable, like arrays, so the .includes method works for arrays as well as strings! **

// console.log('SLICE METHOD');
// SLICE
// INPUT: index at which to begin, optional to include index at which to end
// WHAT IT DOES: extracts a section of a string
// RETURNS: the extracted slice

// console.log('sliced from 4 to 21: ', exampleString.slice(4, 21));
// console.log('sliced from 15 on: ', exampleString.slice(15));

// console.log('SPLIT METHOD');
// SPLIT
// INPUT: separator/character where to separate the string, optional to include a limit to the number of splits
// WHAT IT DOES: removes the separator from the string and substrings are returned as an array
// RETURNS: array of the substrings

// console.log('example string split on the space', exampleString.split(' '));
// console.log('example string split on the letter "i"', exampleString.split('i'));
// console.log('example string split on "" (no space)', exampleString.split(''));
// console.log('example string split on "" (no space) with a limit of 6', exampleString.split('', 6));

// console.log('TRIM METHOD');
// TRIM
// WHAT IT DOES: removes white space from both ends of a string, but not any spaces in between characters
// RETURNS: a new string without white space

var whiteSpaceString = '     get rid of this      white space     ';

console.log('white space on the ends was trimmed, but not the white space in between characters: \n', whiteSpaceString.trim());

// ** Note: there are also methods called .trimRight() and .trimLeft(), but they are not standards and will not work the same for every user in every browser, so use with caution


// IIFE: Immediately-Invoked Function Expression
// will run on page load
function myIffyIffe() {
  console.log('I\'m iffy about IIFEs!');
}
