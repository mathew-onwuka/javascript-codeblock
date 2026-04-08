
// Online Bookstore Order
// Task 1: Create Variables

let	customerName = "Mathew Udo Onwuka";
let	customerAge = 35;
let	bookTitle = "Introduction to Node JS";
let	bookPrice = 10000;
let	quantity = 1;
let	isStudent = true;

// Task 2: Use Arithmetic Operators
// Calculate the total cost of the books.
// Store the result in a variable called totalPrice.

let totalPrice = bookPrice * quantity;

// Task 3: Use Comparison Operators

// Write expressions to check the following:
// 	1.	Check if the customer is 18 years or older.
// 	2.	Check if the quantity of books is more than 3.
// 	3.	Check if the book price is equal to 5000.

let isAdult = customerAge > 18;
let buyingManyBooks = quantity > 3;
let isBookFiveThousand = bookPrice === 5000;

// Task 4: Use a Non-Primitive Data Type

const customerOrder = {
   customerName: "Mathew Udo Onwuka",
   bookTitle: "Introduction to Node JS",
   quantity: quantity,
   totalPrice: totalPrice
};

// Task 5: Print the Results

console.log("Customer Name: " + customerOrder.customerName);
console.log("Book Title: " + customerOrder.bookTitle);
console.log("Total Price: " + customerOrder.totalPrice);
console.log("Is Customer an Adult? " + isAdult);
console.log("Buying More Than 3 Books?" + buyingManyBooks);
console.log("Is Book Price 5000? " + isBookFiveThousand);