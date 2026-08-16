
// 1. SALARY CALCULATOR


let salary = 30000;
let bonus = 5000;
let tax = 2000;

let finalSalary = salary + bonus - tax;

console.log("Final Salary:", finalSalary);



// 2. PREDICT THE OUTPUT


let a = 10;
let b = a++;
let c = ++a;

console.log(a); // 12
console.log(b); // 10
console.log(c); // 12


// 3. LOGICAL OPERATORS


console.log(10 > 5 && 20 < 10 || 5 === "5");
// false

console.log(10 < 5 || 20 >= 20 && 5 == "5");
// true

console.log(!(10 > 5));
// false


// 4. ATM WITHDRAWAL


let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {
    console.log("Error: Withdrawal must be greater than 0");
}
else if (withdrawal > balance) {
    console.log("Error: Insufficient balance");
}
else if (withdrawal % 100 !== 0) {
    console.log("Error: Withdrawal must be a multiple of 100");
}
else {
    balance = balance - withdrawal;
    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balance);
}



// 5. STUDENT GRADE


let mark = 78;

if (mark >= 90 && mark <= 100) {
    console.log("Grade: A");
}
else if (mark >= 80 && mark <= 89) {
    console.log("Grade: B");
}
else if (mark >= 70 && mark <= 79) {
    console.log("Grade: C");
}
else if (mark >= 60 && mark <= 69) {
    console.log("Grade: D");
}
else if (mark < 60) {
    console.log("Fail");
}
else {
    console.log("Invalid Mark");
}



// 6. NESTED LOGIN


let username = "admin";
let password = "1234";
let otp = 5555;

if (username === "admin") {

    if (password === "1234") {

        if (otp === 5555) {
            console.log("Login successful");
        }
        else {
            console.log("Invalid OTP");
        }

    }
    else {
        console.log("Invalid password");
    }

}
else {
    console.log("Invalid username");
}



// 7. NUMBER PATTERN


for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// 8. MULTIPLICATION TABLE


let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}



// 9. REVERSE COUNTDOWN
// 

let count = 10;

while (count >= 0) {
    console.log(count);
    count--;
}



// 10. OTP SYSTEM


let correctOTP = 1234;
let attempts = 0;
let verified = false;

while (attempts < 3) {

    let enteredOTP = Number(prompt("Enter OTP:"));

    if (enteredOTP === correctOTP) {
        console.log("OTP verified");
        verified = true;
        break;
    }
    else {
        attempts++;
        console.log("Incorrect OTP");
    }
}

if (verified === false) {
    console.log("Account blocked");
}



// 11. ARRAY SEARCH

let fruits = ["apple", "banana", "orange", "grapes", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);



// 12. OBJECT DETAILS


let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for (let property in employee) {
    console.log(property + ":", employee[property]);
}


// 13. CALCULATOR FUNCTION


function calculator(a, b, operator) {

    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        return a / b;
    }
    else if (operator === "%") {
        return a % b;
    }
    else {
        return "Invalid Operator";
    }
}

console.log(calculator(20, 5, "+")); // 25
console.log(calculator(20, 5, "-")); // 15
console.log(calculator(20, 5, "*")); // 100
console.log(calculator(20, 5, "/")); // 4
console.log(calculator(20, 5, "%")); // 0



// 14. EMPLOYEE SALARY


function salaryDetails(salary, bonus) {
    return salary + bonus;
}

console.log(salaryDetails(40000, 5000));
// 45000



// 15. FUNCTION WITH DEFAULT PARAMETER


function employeeDetails(name, role = "Trainee") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Kamal", "Developer");


// 16. CALLBACK TASK


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function calculate(a, b, callback) {

    let result = callback(a, b);

    console.log("Result:", result);
}

calculate(10, 5, add);
calculate(10, 5, sub);
calculate(10, 5, mul);



// 17. GENERATOR TASK


function* rewards() {

    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}

let reward = rewards();

console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);



// 18. SPREAD OPERATOR

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);



// 19. ARRAY DESTRUCTURING


let student = ["Arun", "ECE", 8.5, "Developer"];

let [name, department, cgpa, role] = student;

console.log("Name:", name);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);



// 20. NESTED OBJECT DESTRUCTURING

let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

let {
    employee: {
        name: employeeName,
        role: employeeRole,
        salary: employeeSalary
    }
} = company;

console.log("Employee Name:", employeeName);
console.log("Role:", employeeRole);
console.log("Salary:", employeeSalary);



// FINAL CHALLENGE - STUDENT MANAGEMENT CONSOLE PROGRAM


let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];


// FUNCTION 1 - PRINT ALL STUDENTS


function printAllStudents(students) {

    console.log("===== ALL STUDENTS =====");

    for (let student of students) {

        let { name, department, mark } = student;

        console.log(
            "Name:", name,
            "| Department:", department,
            "| Mark:", mark
        );
    }
}



// FUNCTION 2 - PRINT ONLY ECE STUDENTS


function printECEStudents(students) {

    console.log("===== ECE STUDENTS =====");

    for (let student of students) {

        let { name, department, mark } = student;

        if (department === "ECE") {

            console.log(
                "Name:", name,
                "| Department:", department,
                "| Mark:", mark
            );
        }
    }
}


// FUNCTION 3 - STUDENTS WHO SCORED ABOVE 80


function printAbove80(students) {

    console.log("===== STUDENTS ABOVE 80 =====");

    for (let student of students) {

        let { name, department, mark } = student;

        if (mark > 80) {

            console.log(
                "Name:", name,
                "| Department:", department,
                "| Mark:", mark
            );
        }
    }
}



// FUNCTION 4 - TOTAL MARKS


function calculateTotalMarks(students) {

    let total = 0;

    for (let student of students) {

        let { mark } = student;

        total = total + mark;
    }

    return total;
}



// FUNCTION 5 - AVERAGE MARK


function calculateAverage(students) {

    let total = calculateTotalMarks(students);

    return total / students.length;
}



// FUNCTION 6 - HIGHEST MARK


function findHighestMark(students) {

    let highest = students[0].mark;

    for (let student of students) {

        let { mark } = student;

        if (mark > highest) {
            highest = mark;
        }
    }

    return highest;
}



// FUNCTION 7 - LOWEST MARK

function findLowestMark(students) {

    let lowest = students[0].mark;

    for (let student of students) {

        let { mark } = student;

        if (mark < lowest) {
            lowest = mark;
        }
    }

    return lowest;
}



// CALL ALL FUNCTIONS


printAllStudents(students);

printECEStudents(students);

printAbove80(students);

let totalMarks = calculateTotalMarks(students);
console.log("Total Marks:", totalMarks);

let averageMarks = calculateAverage(students);
console.log("Average Marks:", averageMarks);

let highestMark = findHighestMark(students);
console.log("Highest Mark:", highestMark);

let lowestMark = findLowestMark(students);
console.log("Lowest Mark:", lowestMark);


