//? document.querySelector('clock') => same as getElementdbyId 
const clock =  document.getElementById('clock')

setInterval(function(){
    let date = new Date() //? For getting the date
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString()

}, 1000) //? Gives the output in a set of intervals when neede
