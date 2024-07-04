// TODO : CONTROL STATEMENTS => IF, ELSE, ELSE-IF
//? < : lessthan, > : greater than, <= : less than equal, == : equal to, != : Not equal to, === : checks type also known as strict equal, !== : checks negative sign, && : AND, || : OR - Test multiple conditions

// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ) {   
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200 
// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


const balance = 1000

// if (balance > 500) console.log("test"); //! Short hand if statement

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFormEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFormEmail) {
    console.log("User Logged In");
}