/**
 * TODO: Declaring objects with the help of Constructors
 */

//! const tinderUser = new Object () => Its same. This is known as Singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname: "Haseeb",
            lastname: "Sofi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1,obj2) //? => Object.assign({}, values), Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj3 = {...obj1,...obj2} //? => Most commonly used and easier
// console.log(obj3);



const users = [
    {
        id: 1,
        user: "h@gmail.com"
    },
    {
        id: 1,
        user: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //? Keys and values together in array format

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //? Checks if the property is availble or not.

// ! Destructor in objects

const Course = {
    coursename : "Js",
    price: "$999",
    courseInstructor: "Haseeb"
}

// course.courseInstructor
const {courseInstructor: instructor} = Course //!destructing an object
console.log(instructor);

{
    name: "haseeb"
    coursename:"js"
    price: "free"
}