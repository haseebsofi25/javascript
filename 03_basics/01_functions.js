function sayMyName () {
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("E");
    console.log("E");
    console.log("B");
}

// sayMyName()

// function addTwoNumbers(num1, num2) { //? num1 and num2 are known as parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) { //? num1 and num2 are known as parameters

    // let result = num1 + num2
    // return result                //? returns the value when the function is executed, anything logged after return it wont execute

    return num1+num2
}

const result = addTwoNumbers(3,4) //? 3,4 are known as Arguments

// console.log(`Result: ${result}`);



function loginUserMessage(username ) {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`  
}

// console.log(loginUserMessage("Haseeb"))
// console.log(loginUserMessage())


function calculateCartPrice (...num1) {  //? ... Rest operator combines all values and stores them in an array
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "haseeb",
    price: "$99"
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: "$99"
})

const myNewArray = [200,300,400]

function returnSecondValue (getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));