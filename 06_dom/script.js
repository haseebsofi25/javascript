/**
 * TODO: 4 PILLARS OF DOM
 *? SELECTION OF AN ELEMENT
 *? CHANGING HTML
 *? CHANGING CSS
 *? EVENT LISTENER  
 */

// document.querySelector("h1").innerHTML = "huihui"

// var a = document.querySelector("h1") //? Selection of element
// a.innerHTML = "hiihih" //? Changing html
// a.style.color = "yellow"            //? Changing css
// a.style.backgroundColor = "black"

// var a = document.querySelector("h1")

// a.addEventListener("click", function () { //? Event Listener
//     a.innerHTML = "huihui"
//     a.style.color = "yellow"
//     a.style.backgroundColor = "black"
// })

//! Practical example
// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")


// var flag = 0

// btn.addEventListener("click", function() {
//     if(flag == 0) {
//         bulb.style.backgroundColor = "yellow"
//         flag = 1
//     }else{
//         bulb.style.backgroundColor = "transparent"
//         flag = 0
//     }
// })

// var h = document.querySelectorAll("h1")

var h = document.getElementById("box")
h.textContent = "byee"