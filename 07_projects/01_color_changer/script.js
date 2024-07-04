const btn = document.querySelectorAll(".button")
const body = document.querySelector('body')

btn.forEach(function(button){ //? Allows us to select each button for changing the color
    console.log(button);
    button.addEventListener("click",function(event){
        console.log(event);
        console.log(event.target); //? Lets us know from where the event is coming fromsuch as location of the button class is span.Returns the object to which event is dispatched (its target).
        if (event.target.id === 'grey') { //? .id gives the id of the target
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id
        }
    })
})