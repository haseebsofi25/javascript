// TODO: FOR LOOP, BREAK AND CONTINUE
 
//? Declaring variable; condition; iteration
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best nunmber");
    }
    // console.log(element);
}



for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`Inner Loop value: ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i * j);
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//! BREAK & CONTINUE

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected ${5}`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected ${5}`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}