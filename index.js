
// Assignment 3: Callback-Based Utility System
// Topic: Callback Functions in JavaScript



// Q1. Create processArray() function

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

// Example

let answer1 = processArray([1, 2, 3, 4], function(n) {
    return n * n;
});

console.log("Q1:", answer1);

// Output:
// Q1: [1, 4, 9, 16]


// Q2. Square every number in an array

let numbers = [1, 2, 3, 4];

let square = processArray(numbers, function(n) {
    return n * n;
});

console.log("Square:", square);

// Output:
// Square: [1, 4, 9, 16]


// Q3. Return only even numbers

function getEvenNumbers(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let even = getEvenNumbers(numbers, function(n) {
    return n % 2 === 0;
});

console.log("Even Numbers:", even);

// Output:
// Even Numbers: [2, 4]


// Q4. Create processString() function

function processString(str, callback) {
    return callback(str);
}

let text = processString("hello world", function(str) {
    return str;
});

console.log("String:", text);

// Output:
// String: hello world


// Q5. Convert string into uppercase

let message = processString("hello world", function(str) {
    return str.toUpperCase();
});

console.log("Uppercase:", message);

// Output:
// Uppercase: HELLO WORLD


// Q6. Count words in a sentence

let sentence = "JavaScript is very easy to learn";

let count = processString(sentence, function(str) {
    let words = str.trim().split(/\s+/);
    return words.length;
});

console.log("Total Words:", count);

// Output:
// Total Words: 6


// Q7. Create calculate() function

function calculate(a, b, callback) {
    return callback(a, b);
}

let result = calculate(10, 5, function(a, b) {
    return a + b;
});

console.log("Result:", result);

// Output:
// Result: 15


// Q8. Addition, Subtraction, Multiplication and Division

// Addition

let add = calculate(10, 5, function(a, b) {
    return a + b;
});

console.log("Addition:", add);

// Output:
// Addition: 15


// Subtraction

let sub = calculate(10, 5, function(a, b) {
    return a - b;
});

console.log("Subtraction:", sub);

// Output:
// Subtraction: 5


// Multiplication

let mul = calculate(10, 5, function(a, b) {
    return a * b;
});

console.log("Multiplication:", mul);

// Output:
// Multiplication: 50


// Division

let div = calculate(10, 5, function(a, b) {
    return a / b;
});

console.log("Division:", div);

// Output:
// Division: 2


// Q9. Find first element that matches a condition

function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

let marks = [35, 42, 67, 80, 90];

let found = findElement(marks, function(n) {
    return n >= 60;
});

console.log("First Element:", found);

// Output:
// First Element: 67


// Bonus: Menu Driven Calculator

function bonusMenu() {

    let choice = prompt(
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Exit"
    );

    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    let result;

    if (choice === "1") {
        result = calculate(a, b, function(x, y) {
            return x + y;
        });
    }
    else if (choice === "2") {
        result = calculate(a, b, function(x, y) {
            return x - y;
        });
    }
    else if (choice === "3") {
        result = calculate(a, b, function(x, y) {
            return x * y;
        });
    }
    else if (choice === "4") {
        if (b === 0) {
            result = "Cannot divide by zero";
        } else {
            result = calculate(a, b, function(x, y) {
                return x / y;
            });
        }
    }
    else {
        console.log("Calculator Closed");
    }

    if (choice === "1" || choice === "2" ||
        choice === "3" || choice === "4") {
        console.log("Answer:", result);
    }
}

// Example:
// bonusMenu();

// Output:
// Enter first number: 10
// Enter second number: 5
// Answer: 15
