//TODO: REDUCE IN JS

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// ? USING ARROW FUNCTION
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js",
        price: 299
    },
    {
        itemName: "Python",
        price: 1099
    },
    {
        itemName: "Cloud",
        price: 1299
    }
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);