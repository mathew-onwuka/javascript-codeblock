let items = ["mike", "peter", "John", "Mathew"]
console.log(items[0]); //Braces uses index that starts from zero
items.length //Lenght starts from 1

// Differentiate between higher order (they are functions) array methods and array methods

// For each
let fruits = ["mango", "banana", "apple", "pear", "orange"];

fruits.forEach(function(fruit){
    console.log("I like " + fruit);
})

items.forEach(function(name){
    console.log("Where is " + name); // named function
})

// Arrow function foreach

items.forEach((student) => {
    console.log("Tech_Crush_2026 " + student);
})



// Map method creates a new array

let scores = [90, 80, 70, 60, 50];
let newScores = scores.map( score => score + 5); // this is an arrow function
// or you can write it like this with multipe lines
// let newScores = scores.map((score) => { 
//     return score + 5;
// });
console.log(newScores);

// Exampe 2 of map method

let students = ["mark", "james", "benson"];
let nameTag = students.map(function(tag){
    return "Student is " + tag;
})
console.log(nameTag);

// Filter method

let jambScores = [245, 170, 155, 260, 130, 190];
let passed = jambScores.filter((score)=>{
    return score >= 200;
})
console.log(passed);

let ages = [19, 17, 29, 30, 15];
let adults = ages.filter(function(age){
    return age >= 18;
})
console.log(adults);

// find method

const studentsNames = ["john", "ada", "abike", "kunle", "john"];
const foundName = studentsNames.find((nameFound) => {
    return nameFound === "john";
})
console.log(foundName);

// Reduce method

let cartPrices = [1500, 2000, 300, 24000];
let counter = 0;
let totalPrice = cartPrices.reduce(function(total, currentPrice){
    return total + currentPrice;
}, counter); //accumulator, current value, initial value
console.log(totalPrice);

// push, pop, shift and unshift
let colors = ["red", "blue", "white", "green"];
colors.push("black"); //adds the element to the last

let lastColor = colors.pop(); //removes last element
console.log(lastColor);

let firstColor = colors.shift(); //just like pop but removes element frm the front
console.log(colors);
console.log(firstColor);

let RemoveColor = colors.unshift("purple"); //just like push but adds element from the front
console.log(colors);
console.log(RemoveColor);