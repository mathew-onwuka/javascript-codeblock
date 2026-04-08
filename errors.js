// Syntax Error is not following the right method or format
// Type error not following the type
// reference error is calling a function not declared

// Error handling
try{
// Failed code
} catch (error){
// display
// console.log(error.name); Type of Error
// console.log(error.message); Cannot read properties of null
// console.log(error.stack); full details and line number of where error occurred
} finally{
    // console.log{"loading complete"}; This always runs
}

try {
    //Failed code block
    let rsult = 10 / 0;
    console.log(result);
    undefinedFunction(); //Code will be here
    console.log("This will not run");
} catch (error) {
    // This runs if something occurs
    console.log("An error occurred: " + error);}
console.log("The program continues here...");


try{
let age = 25;
console.log(age.length());
} catch (error){
console.log("An error occurred: " + error.message);
} finally{
    console.log{"Please enter your message"};
}


