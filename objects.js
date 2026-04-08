// objects
let student = {
    studentName: "Mathew Udo",
    regNumber: 92393882,
    age: 36,
    isEnrolled: true
};
console.log(student.age);
console.log(student["isEnrolled"]);

// Destructuring objects

let employee = {
    name: "Mathew Udo",
    role: "IT",
    salary: 1500000,
    city: "Abu Dhabi"
};

 let newName = employee.name;
 let newRole = employee.role;

 const {name, salary} = employee;

//  Swapping object values
let courses = {
    CSC401 : "Computer Science",
    CSC402 : "Agric Science",
    CSC403 : "Library Science",
    CSC404 : "Electrica; Science"
}

let  {CSC401 : CSC400} = courses; //Varible Value passed from 1 to 2
console.log(CSC400);

let person = {
    name: "Ben",
    opay: true
}

let {opay: palmpay} = person; //passing a variable name to another variable name
console.log(palmpay);

// Spread operators copies from one object into another object

let profile = {
    name : "Ada",
    age: 36
};
let updatedProfile = {
    ...profile,
    city: "Abuja"
}
console.log(updatedProfile);

// Rest operators copies to a new object
// const {nombre, ...rest} = {
//     nombre: 
// }

//For use iteration in objects

const user = {
    name: "Mathew Udo",
    role: "IT",
    salary: 1500000,
    city: "Abu Dhabi"
}

// for in fr looping and returning individual entriess
for (let key in user){
    console.log("this is the key :" + key);
    console.log("this is the value  :" + user[key]);
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));