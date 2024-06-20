// *TODO : Comaprison operations 
// console.log(2 > 1);
// *?console.log(2 >= 1);
// *console.log(2 < 1);
// !console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); 
//! The reason is than an equality check == and comparisons > < >= <= work differently. comparisons convert null to a number, treating it as 0. Thats why null >= 0is true and null > 0 is false 

// console.log(undefined == 0);

// *? === it checks value and datatype both

// *TODO: Memories in JavaScript

// *Stack (Primitve). It includes boolean and other datatypes. => gives a copy, Heap (Non-Primitive) => gives a reference. Makes changes in the original value itself

let mySystemName = "hazeebS"

let anotherName = mySystemName
anotherName = "cahiaurcode"

console.log(mySystemName);
console.log(anotherName);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user

user2.email = "haseeb@google.com"
console.log(user.email);
console.log(user2.email);

