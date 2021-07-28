// PASSWROD GENERATOR APP
const generatePassword = () => {
    // 1. get user name and store in a string variable
    let userName = document.getElementById('userName').value;
    // 2. get user surname and store in a string variable
    let userSurname = document.getElementById('userSurname').value;
    // 3. get user favorit color and store in a string variable
    let userColor = document.getElementById('userColor').value;
    // 4. concatenate all strings with out spaces and store in a string variable
    let password = userName + userSurname + userColor;
    // 5. inject the password in the html element (id = "password")
    document.getElementById('password').innerHTML = password + "40";
}

document.getElementById('generateBtn').addEventListener('click', generatePassword());