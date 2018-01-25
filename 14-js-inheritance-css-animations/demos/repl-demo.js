// PASS BY VALUE
// string, boolean, integer
var a = 5;
var c = a;
console.log('before', c);
a = 10;
console.log('after', c);


// PASS BY REFERENCE
// arrays, objects, functions

var myArray = [1, 2, 3, 4, 5];
var secondArray = myArray;
console.log('before', secondArray);
myArray.push(6);
console.log('after', secondArray);