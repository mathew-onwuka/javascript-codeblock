// if-else statements
let userAge = 21;
if (userAge >= 18) {
    console.log("Welcome to the Club House");
} else {
    console.log("Sorry, you are underaged!");
}

let gender = "female";

if (gender === "female") {
    console.log("Welcome to the female section");
} else if (gender === "male") {
    console.log("Welcome to the male section");
} else if (gender === "other") {
    console.log("Welcome to the other section");
} else {
    console.log("We don't know where you belong")
}

let username = "luther";
let password = "admin101";

if (username === "luther" && password === "admin101") {
    console.log("Login was successful!")
} else if (username === "luther" || password === "admin101"){
    console.log("username or password is incorrect!")
} else {
    console.log("Login Failed")
}

let voterAge = 18;
if (voterAge >= 18){
    console.log("You are old enough to vote");
} else {
    console.log("you are under 18");
}