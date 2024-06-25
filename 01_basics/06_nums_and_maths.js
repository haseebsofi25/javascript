// const score = 400

// const balance = new Number (100);
// let bal = balance
// console.log(bal);
// console.log(bal.toString().length);
// console.log(bal.toFixed(2)); //* To give Precision Value

// const otherNumber = 125.0603

// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000 
// console.log(hundreds.toLocaleString('en-IN'));

//! +++++++++++++ MATHS +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(4))  //* .abs => Gives absolute value. Positives remains positive andd negative changes into positive
// console.log(Math.round(4.6)); //* .round => Gives Round off value
// console.log(Math.min(4,5,6,7,3,2,1)); //* Gives the minimum value
// console.log(Math.max(847298,432,2,3,4)); //*Gives the maximum value


console.log(Math.random()); //Gives value in 1 and 0
console.log((Math.random()*10) + 1); //Shifts the value
console.log(Math.floor(Math.random()*10) + 1); //Math.floor will give the lowest value (0), So we add +1 at the end so that it gives the min value from 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min) 
// Here we did max - min so we get our output in between the range 10 - 20 and added +1 so we avoid zero case. and in the end we add + min to mention the minimum value

