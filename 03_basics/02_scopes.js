//TODO: SCOPES & MINI HOISTING
//! {} => SCOPES when used with functions and loops

// var c = 300   //? this is global scope
let a  = 300
if (true) {
    let a = 10
    const b = 20  //? This is block scope
    // console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Haseeb"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()


if (true) {
    const username= "Haseeb"
    if (username === "Haseeb") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ Interesting +++++++++++++


function addOne(num) {
    return num + 1
}

addOne(5)


const addTwo = function (num) {
    return num + 2
}

addTwo(5)