//TODO: FOR OF LOOP

// ["", "", ""]
// [{}, {}, {}]

/**
 *! Syntax 
*? for (const iterator of object) {
*? }
 */

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greeting =  "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//? MAPS in js

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('Fr', 'France')

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
