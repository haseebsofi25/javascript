/**
 * TODO: ARRAYS IN JS
 * ? Storing a collection of multiple items under a single variable. 
 * ? Denoted in [] brackets
 * ? Arrays in JavaScript are resizable and can contain a mix of different data types.
 * ? In Java Script arrays creates Shallow copies rather than deep copies. Shallow Copies - It is a copy that share the same refernce point meaning if we make a change the change will be initiated in the original array also. Where as,  Deep copy does not share the same refernce point.
 * ? Indexing is possible
 *  *Values stored in an Array are know as ELEMENTS. Elements can be integers, strings, mix, boolean.
 */

const myArr = [0,1,2,3,4,5, true, 'haseeb'] //*Here myArr is a single variable with multiple elements.
const myHeros = ["Ironman","Spiderman"]
const myArr2 = new Array (1,2,3,4) //! => Another way to declare an array
// console.log(myArr[1]); //! => Indexing

// ! ARRAY METHODS:

// myArr.push(6)       //* Adds element 
// myArr.push(7)
// myArr.pop()         //* Removes the Last element

// myArr.unshift(9)       //* Adds Element in the start
// myArr.shift()          //* Removes Element From the start

// console.log(myArr.includes(9));

// const newArr = myArr.join() //* .join() => Adds all the elements of an array into a string
// console.log(myArr);
// console.log(newArr);

//! SLICE, SPLICE OPERATION

console.log("A ", myArr);

const mynewArr = myArr.slice(1,3)   //! In slice the only the portion of array will be executed without the end range

console.log(mynewArr);
console.log("B ", myArr);

const mynewArr2 = myArr.splice(1,3)     //! In splice the portion of array will be removed 
console.log("C ", myArr);
console.log(mynewArr2);
