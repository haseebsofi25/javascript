const accountId = 144553 //Value does not change
let accountEmail = "haseebsofi@gmail.com" //Can change
var accountPass = "12345" //can change 
accountCity = "Hyderabad"
let accountState

// accountId = 2 not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPass = "212121"
accountCity = "Bangalore"

console.log(accountId);
console.table([accountEmail,accountPass,accountCity,accountState]) //To print multiple items in a tabular format.
