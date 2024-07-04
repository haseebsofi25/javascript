const user = {
    username : "haseeb",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);  //? This talks about the current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //? When we run this in the node environment it refers to a empty object. that is "{}"

// function chai() {
//     let username = "Haseeb"
//     console.log(this.username); //? We cannot use this inside a function
// }

// chai()

// const chai = function () {
//     let username = "Haseeb"
//     console.log(this.username);
// }

//! => ARROW FUNCTION

const chai = () => {
    let username = "Haseeb"
    console.log(this);
}

// chai()

// () => {} //! This is an Arrow Funtion

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //! Implicit Return

// const addTwo = (num1, num2) => (num1 + num2) //! We can use paranthesis but not Curly braces, If we use curly braces we need to add return in the function.
//! When we use return it is known as Explicit return

const addTwo = (num1, num2) => ({username: "Haseeb"}) //? For printing objects

console.log(addTwo(2,3))