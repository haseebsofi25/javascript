//*TODO : STRINGS IN JS
// console.log('hello');

const name = "haseeb"
const repoCount = 10

// *?console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// ! This is String Interpolation

const gameName = new String('haseeb-s')
console.log(gameName[0]); // *? this is done for indexing
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //* To find the character at the specific index
console.log(gameName.indexOf('e')); //* To find the index of the character
const newString = gameName.substring(0, 6) 
//! SLICING
// console.log(newString);

const anotherString = gameName.slice(-8, 6)
// console.log(anotherString);

//*? TRIMING
const newStringOne = "   haseeb   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://haseeb.com/haseeb%20sofi"

console.log(url.replace('%20', '-')) //* This method replaces

console.log(url.includes('haseeb')) //* checks if the element is included in the string 

console.log(gameName.split('-'));