// PASSWROD GENERATOR APP

// 1. get user name and store in a string variable
let userName = prompt("What's your name?");
// 2. get user surname and store in a string variable
let userSurname = prompt("What's your surname?");
// 3. get user favorit color and store in a string variable
let userColor = prompt("What's your favorit color?");
// 4. concatenate all strings with out spaces and store in a string variable
let password = userName + userSurname + userColor;
// 5. inject the password in the html element (id = "password")
document.getElementById('password').innerHTML = "Ecco la tua password: " + password + "40";