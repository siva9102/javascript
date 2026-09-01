//Task 1 – Student Details
const collegeName = "ABC Engineering College";
let studentName = "Siva Kumar";
var studentAge = 25;

console.log(collegeName);
console.log(studentName);
console.log(studentAge);

//Task 2 – Mobile Price
let price = 25000;

price = 27000;

console.log(price);
//Task 3 – Company Name
//const company = "TechNova";

//console.log(company);

//company = "Google";

//console.log(company);
//Task 4 – Console Practice
console.log("Login Successful");

console.warn("Password is Weak");

console.error("Network Error");
//Task 5 – Data Types
let name = "Siva Kumar";
let age = 25;
let isDeveloper = true;
let city="chennai";

console.log(name);


console.log(age);


console.log(isDeveloper);


console.log(city);

//Task 6 – Shopping Cart Array
let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headset",
    "Monitor"
];

console.log("First product:", cart[0]);
console.log("Third product:", cart[2]);
console.log("Last product:", cart[cart.length - 1]);
//Task 7 – Favorite Movies
let movies = [
    "Leo",
    "Jailer",
    "Vikram",
    "Master",
    "Kaithi",
    "Ghilli"
];

console.log("2nd movie:", movies[1]);
console.log("5th movie:", movies[4]);
console.log("Last movie:", movies[movies.length - 1]);
//Task 8 – Employee Object
let employee = {
    name: "Arun",
    age: 30,
    department: "IT",
    skills: ["JavaScript", "HTML", "CSS"],
    salary: 50000
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("First Skill:", employee.skills[0]);
console.log("Salary:", employee.salary);
//Task 9 – Product Details
let product = {
    productName: "Smartphone",
    brand: "Samsung",
    price: 30000,
    colors: ["Black", "Blue", "White"]
};

console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Second Color:", product.colors[1]);
//Task 10 – Arithmetic Calculator
let num1 = 20;
let num2 = 6;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);
//Task 11 – Increment Practice
let d = 5;

d++;
console.log("After d++:", d);

++d;
console.log("After ++d:", d);

d--;
console.log("After d--:", d);

--d;
console.log("After --d:", d);
//Task 12 – Predict the Output
let a = 9;

let b = a++;

let c = ++b;

console.log(a);
console.log(b);
console.log(c);
//Task 13 – Predict the Output
let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);
//Task 14 – School Object
let school = {
    schoolName: "ABC Matriculation School",
    principal: "Mr. Kumar",
    totalStudents: 1200,
    classes: [
        "Class 6",
        "Class 7",
        "Class 8",
        "Class 9",
        "Class 10"
    ]
};

console.log("School Name:", school.schoolName);
console.log("Principal:", school.principal);
console.log("Last Class:", school.classes[school.classes.length - 1]);
//Task 15 – Grocery List
let groceries = [
    "Rice",
    "Sugar",
    "Milk",
    "Bread",
    "Eggs",
    "Oil",
    "Salt",
    "Tea"
];

console.log("First item:", groceries[0]);
console.log("Fourth item:", groceries[3]);
console.log("Last item:", groceries[groceries.length - 1]);
//Task 16 – User Profile
let username = "sivakumar";
let email = "siva@gmail.com";
let age1 = 25;
let isPremium = true;

console.log(username);
console.log(typeof username);

console.log(email);
console.log(typeof email);

console.log(age1);
console.log(typeof age1);

console.log(isPremium);
console.log(typeof isPremium);
//Task 17 – Variable Rules
var a1 = 10;
let b1 = 20;
const c1 = 30;
//a1 = 100;  
//b1 = 200;   
//c1 = 300;  
//var a1 = 50; 

//let b1 = 60;   
//const c1 = 70; 
//Task 18 – Marks Calculation
let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);
//Task 19 – Company Database
let company = {
    companyName: "TechNova Solutions",
    employees: [
        "Arun",
        "Kumar",
        "Priya",
        "Divya"
    ],
    location: "Chennai",
    foundedYear: 2015,
    CEO: "Raj Kumar"
};

console.log("CEO:", company.CEO);
console.log("Location:", company.location);
console.log("First Employee:", company.employees[0]);
//Task 20 – Mini Profile
let profile = {
    name: "Siva Kumar",
    city: "Chennai",
    hobbies: [
        "Reading",
        "Photography",
        "Cricket"
    ],
    age: 25
};

console.log("Name:", profile.name);
console.log("Second Hobby:", profile.hobbies[1]);
console.log("Age:", profile.age);
