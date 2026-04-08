let str ="Coding is fun";
//Extract the word coding
let word = str.slice(0, 6);
console.log(word);

let fun = str.substring(10, 13);
console.log(fun);

let get_is = str.slice(7, 9);
console.log(get_is);

// Challenge 2

const colors = "red, green, blue";
const comma = colors.split(",");
console.log(comma);

const joined = comma.join(" - ");
console.log(joined);

//Challenge 3

const url = "/api/v1/users";
const slash = url.split("/");
console.log(slash);
console.log(slash[2]);

//Challenge 4
const matricNumber = "TECHCRUSH-MATHEW-2026";
const getName = matricNumber.split("-");
console.log(getName);
console.log(getName[1]);


console.log(5+"3");