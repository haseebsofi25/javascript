//TODO: WHILE & DO-WHILE LOOP 
//? The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

let i = 0
// while (i <= 10) {
//     console.log(`Value of index is: ${i}`);
//     i = i + 2
// }

let myArray = ['flash','superman','batman']

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

//? In do while it performs the operation first then checks the condition

let score = 11

do {
    console.log(`Score is ${score}`);   
    score++ 
} while (score <= 10);