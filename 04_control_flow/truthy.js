const userEmail = "" 

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Dont have user Email");
}

/**
 * ? FALSY VALUES
 * * false, 0, -0, BigInt 0n, "", null, undefined, NaN
 * 
 * ? TRUTHY VALUES
 * * "0", 'false', " ", [], {}, function(){}
 */

// const demoArr = []

// if (demoArr.length === 0) {
//     console.log("Array is empty"); //! Checks array if empty or not
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); //! Checks object is empty or not
    
}

//! Nullish Coalescing Operator (??) : works on null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //? it does a safety check on null
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);

//! Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80");