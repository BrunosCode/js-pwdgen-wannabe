// PASSWROD GENERATOR APP

// // SERIUS PASSWORD GENERATOR
// const seriusGenerator = () => {
//     // 9. diclare serius password variable and function
//     let seriusPassword = "";
//     // 10. add numbers and simbols to the previus password
//     let passwordCaracters = stupidPassword + "0123456789!£$%&/()=?^*";
//     console.log(passwordCaracters)
//     // 11. run untill reaching the choose number 
//     while (seriusPassword.length < 20) {
//         // 12. random number different for every loop
//         let random = Math.floor(Math.random() * passwordCaracters.length);
//         console.log(random)
//         seriusPassword += passwordCaracters.slice(random - 1, random);
//         console.log(seriusPassword);
//     }
//     return seriusPassword;
// }



const generatePassword = () => {
    // 1. get user name and store in a string variable
    let userName = document.getElementById('user-name').value;
    // 2. get user surname and store in a string variable
    let userSurname = document.getElementById('user-surname').value;
    // 3. get user favorit color and store in a string variable
    let userColor = document.getElementById('user-color').value;
    // 4. concatenate all strings with out spaces and store in a string variable
    let stupidPassword = userName + userSurname + userColor;
    // 5. inject the password in the html element (id = "password")
    document.getElementById('password').innerHTML = stupidPassword + "40";
    
    // SERIUS PASSWORD GENERATOR
    // 6. diclare serius password variable and function
    let seriusPassword = "";
    // 7. add numbers and simbols to the previus password
    let passwordCaracters = stupidPassword + "0123456789!£$%&/()=?^*";
    // 8. run untill reaching the choose number 
    while (seriusPassword.length < 20) {
        // 9. random number different for every loop
        let random = Math.floor(Math.random() * passwordCaracters.length);
        seriusPassword += passwordCaracters.slice(random - 1, random);
    }
    // 10. inject seriusPassword in html
    document.getElementById('serius-password').innerHTML = seriusPassword;
    // 11. show serius generator after some second
    setTimeout( () => {
        document.getElementById('serius-generator').classList.add('show');
    }, 3000);
    // 12. show serius advice after some more second
    setTimeout( () => {
        document.getElementById('serius-advice').classList.add('show');
    }, 5000);
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);