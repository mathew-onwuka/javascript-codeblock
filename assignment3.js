// Section A: forEach()
// Question 1
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function(eachNumber){
    console.log("Each Number multiplied by 2 is " + eachNumber * 2);
}) // Use forEach() to print each number multiplied by 2.

// Question 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function(printNames){
    console.log("Hello " + printNames);
})// Use forEach() to print a message in this format:


//  Section B: map()
// Question 3
const list = [1, 2, 3, 4, 5];
let numberSquared = list.map(square => square**2);
console.log(numberSquared);// Use map() to create a new array where each number is squared.

// Question 4
const prices = [100, 200, 300];
let discountPrice = prices.map((discount) => {
    let price = (discount/100) * 10;
    return discount - price;
})// Use map() to create a new array where each price has a 10% discount applied.
console.log(discountPrice);

// Section C: filter()
// Question 5
const numberList = [5, 12, 8, 20, 3];
let filterList = numberList.filter(function(newList){
    return newList > 10;
})// Use filter() to create a new array that contains only numbers greater than 10.
console.log(filterList);


// Bonus Question (Optional)
// Question 7
const numbers_listed = [10, 15, 20, 25, 30];
let numbers_filter = numbers_listed.filter((new_pair) => new_pair > 20);
console.log(numbers_filter); // First, use filter() to get numbers greater than 20

let lesserNumber = numbers_listed.filter(function(lesser){
    return lesser <= 20;
})

let numberMapped = lesserNumber.map((mapped) => {
    return mapped * 2;
})
console.log(numberMapped);
// Then, use map() to double the remaining numbers
// 👉 Return the final result as a new array.
