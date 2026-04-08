function greet() {
    console.log("Welcome back");
}
greet();

function fareWell(name) {  //function declared with a parameter variable
    console.log("see you soon " + name);
}
fareWell("King"); //Function called with argument

function add() { //static function
    let a = 5;
    let b = 10;
    return a + b;
}
console.log(add());

function addNumber(a, b) { //Dynamic function
    return a + b;
}
console.log(addNumber(4, 4));

function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(14));