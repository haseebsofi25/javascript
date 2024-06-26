/**
 * TODO: OBJECTS IN JS
 ** obj = { key : value }, . operator is used to access objects. 
 **To denote a Symbol we need to keep the key in [] brackets and log it as same to access it.
*/

const mySym = Symbol("key1")

const JsUser = {
    name : "Haseeb",
    "full name" : "Muhammad Haseeb", //! => We cannot print this with . operator
    [mySym] : "key1",
    age : 21,
    location : "Hyderabad",
    email : "haseebsofi25@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// Object.freeze(JsUser) //! .freeze is used to lock the data inside a key. The value does not change after it.

//*TODO : FUNCTIONS 

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JsUser ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());