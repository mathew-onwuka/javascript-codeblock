// string methods
let stringText = "This is a String method";
console.log(stringText.length); //Starts from 1 unlike index that starts from zero

let capitalLetter = stringText.toUpperCase();
let smallLetter = stringText.toLowerCase();
console.log(capitalLetter);
console.log(smallLetter);

let str = "  Hello Everyone  ";
let trimmedStr = str.trim();
let frontTrimmedStr = str.trimStart();
let endTrimmedStr = str.trimEnd();
console.log(trimmedStr);
console.log(frontTrimmedStr);
console.log(endTrimmedStr);


let signupName = "Mathew";
let signinName = " Mathew";

if ((signinName.trim()) === signupName){
    console.log("Login Successful");
} else {
    console.log("Invalid login details");
}

// indexof and includes
let user_email = "just@vibing@gmail.com"; //indexof returns the first occurance
let email_index = user_email.indexOf("@");
console.log(email_index); //returns number

let email_contains_at = user_email.includes("@"); //returns boolean
console.log(email_contains_at);

// Startswith and endswith
let userName = "techCrush Mathew 6";
let starts = userName.startsWith("techCrush"); //returns boolean
console.log(starts);

let ends = userName.endsWith("6"); //returns boolean
console.log(ends);


// Slice and substring
let testString = "My name is Mathew";
let slicedString = testString.slice(0, 9); // can be slice(-3). Starts from the back
let substringString = testString.substring(0, 9); //Doesn't support one number

console.log(slicedString);
console.log(substringString);


// Replace() AND replaceAll()

let message = "I love my mother. My mother was an amazing woman. She tried her best";

let replacedText = message.replace("mother", "Mom"); //Replaces first occurrance
let replacedAllText = message.replaceAll("mother", "Mom"); //Replaces all occurrance
console.log(replacedText);
console.log(replacedAllText);

// Class work

const msg = " Hello, WORLD! ";

let trimedMsg = msg.trim();
let checkMsg = trimedMsg.startsWith("Hello");
let checkEnd = trimedMsg.endsWith("WORLD!");
let lowerCaseConvert = msg.toLowerCase();
let findPosition = msg.indexOf("WORLD");
let replaceMsg = msg.replace("WORLD", "Nigeria");
let replace_All = msg.replaceAll("L", "1");
let getCharacters = msg.substring(3, 8);
console.log(trimedMsg);
console.log(checkMsg);
console.log(checkEnd);
console.log(lowerCaseConvert);
console.log(findPosition);
console.log(replaceMsg);
console.log(replace_All);
console.log(getCharacters);

// split

const sentence = "LANGUAGES: Javascript, PHP, HTML, CSS3, Rust";
let splitSentence = sentence.split(" ");
console.log(splitSentence);

let example = "she is a girl,she is a teacher,she is amazing";
console.log(example.split(","));