//? Its a form so there is no click button instead ther is a submit button

//? const height = parseInt(document.querySelector('#height').value) => If we write this piece of code in the beginning, this usecase will give you empty value i.e, no value will be returned

const form = document.querySelector('form')

//? to stop the value going to the server we use .preventDefault() method

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value) //? gets the value

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    //? For checking the value inserted is right or not

    if (height === '' || height < 0 || isNaN(height)) { //?isNaN() => is a updated method to check if the output will be a number or not a number
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' ||weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        //? Calculate BMI => weight in kilograms divided by height in meters squared. Since height is commonly measured in centimeters, an alternate formula can be dividing the weight in kilograms by the height in cm squared and then divided by 10,000 We use .toFixed method to get fixed decimal values and the output remains small.
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        //? Show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
    // results.innerHTML = `${height}` //? Sets the height and stores the value

})