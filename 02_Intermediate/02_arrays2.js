
const marvel_heros = new Array ("Ironman","Spiderman","Thor")
const dc_heros = ["Batman", "Superman", "Flash"] 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// let a = marvel_heros.concat(dc_heros) //* Joins two arrays and forms a new array
// console.log(a);

const allNewHeros = [...marvel_heros,...dc_heros] //* SPread operator '...' same as concat
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


let realAnotherArr = anotherArray.flat(Infinity)
console.log(realAnotherArr);