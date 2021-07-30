console.log("Welcome to the password validator tool!")
// // let password = "pass1"
// // let userName
// //console.log(`Please enter password here ${password}`)
// var password = ("Please enter password here:")
// // if (password.length >= 10){
// // console.log("Success!")
// // } else {
// //     console.log("Oh no.. Somethings not right.")
// // }


function passwordValidator(password){
    var pass = password
    if (pass.length <= 10){
        // alert("Not long enough")
        console.log(` __    _  _______  __   __    _______  ______    _______  __   __ 
        |  |  | ||   _   ||  | |  |  |  _    ||    _ |  |   _   ||  | |  |
        |   |_| ||  |_|  ||  |_|  |  | |_|   ||   | ||  |  |_|  ||  |_|  |
        |       ||       ||       |  |       ||   |_||_ |       ||       |
        |  _    ||       ||       |  |  _   | |    __  ||       ||       |
        | | |   ||   _   ||   _   |  | |_|   ||   |  | ||   _   ||   _   |
        |_|  |__||__| |__||__| |__|  |_______||___|  |_||__| |__||__| |__|`)
    } else {
        // alert("Is long enough")
        console.log(` __   __  _______  __   __    _______  ______    __   __  __   __  __   __ 
        |  | |  ||   _   ||  | |  |  |  _    ||    _ |  |  | |  ||  | |  ||  | |  |
        |  |_|  ||  |_|  ||  |_|  |  | |_|   ||   | ||  |  | |  ||  | |  ||  |_|  |
        |       ||       ||       |  |       ||   |_||_ |  |_|  ||  |_|  ||       |
        |_     _||       ||       |  |  _   | |    __  ||       ||       ||       |
          |   |  |   _   ||   _   |  | |_|   ||   |  | ||       ||       ||   _   |
          |___|  |__| |__||__| |__|  |_______||___|  |_||_______||_______||__| |__|`)
    }

}

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

