/*
  TODO : Dates in JavaScript Date is an object in JS.
* Months in JS start from 0
* (YY-MM-DD) => In India we use (MM-DD-YY)
*/

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let myCreatedDate = new Date (2023, 0, 23, 5, 3)
// let myCreatedDate = new Date ("2024-01-25")
let myCreatedDate = new Date ("06-25-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //! => Conversion to Seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

// console.log(`${newDate.getDate()} and the time ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: "long"
})
