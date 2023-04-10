// Date: 2023-04-10 -> by Miracle Programmer Team (c) 2023
//? variables
// var firstName = 'John';
// var -> variable keyword
// firstName -> variable name, identifier
// = -> assignment operator
// 'John' -> variable value
// ; -> statement terminator
//----------------------------------------------------------------
//! var
// var myVar = 'Hello World'; // declare a variable ✅
// myVar = 'Hello'; // re assign a value to a variable ✅
// var myVar = 'Hello World'; // re declare a variable ✅
//----------------------------------------------------------------
//! let
// let myVar = 'Hello World'; // declare a variable ✅
// myVar = 'Hello'; // re assign a value to a variable ✅
// let myVar = 'Hello World'; // re declare a variable ❌  // SyntaxError: Identifier 'myVar' has already been declared
//----------------------------------------------------------------
//! const
// const myVar = "Hello World"; // declare a variable ✅
// myVar = 'Hello'; // re assign a value to a variable ❌ // TypeError: Assignment to constant variable.
// const myVar = 'Hello World'; // re declare a variable ❌ // SyntaxError: Identifier 'myVar' has already been declared
//----------------------------------------------------------------
//! var vs let vs const hoisting ✅
//? hoisting -> the process of moving the declaration to the top of the scope
//? hoisting -> ko'tarish, barcha e'lon qilingan o'zgaruvchilarni birinchi joyga o'tkazish
// 'use strict';
// console.log(myVar); // undefined
// myVar = "Hello World"; // declare a variable ✅
// var myVar; // undefined
// console.log(myVar); // Hello World
//----------------------------------------------------------------
// 'use strict';
// console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
// myVar = "Hello World"; // declare a variable ✅ // ReferenceError: Cannot access 'myVar' before initialization
// let myVar; // undefined
// console.log(myVar); // undefined
//----------------------------------------------------------------
// 'use strict';
// console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
// myVar = "Hello World"; // declare a variable ✅ // ReferenceError: Cannot access 'myVar' before initialization
// const myVar; // SyntaxError: Missing initializer in const declaration
// console.log(myVar); // SyntaxError: Missing initializer in const declaration
//----------------------------------------------------------------
//! Temporal Dead Zone (TDZ) ✅ // ES6 (ES2015) -> let, const ✅
//? TDZ -> the area where a variable is not accessible
//? TDZ -> o'zgaruvchi e'lon qilingan joydan keyin, uni ishlatish mumkin bo'lgan joy
//----------------------------------------------------------------
//! var vs let vs const scope ✅
//? scope -> the area where a variable is defined
//? scope -> o'zgaruvchi e'lon qilingan joy
//----------------------------------------------------------------
//? global scope -> the area where a variable is defined outside of a function
//? global scope -> o'zgaruvchi funksiya tarkibida e'lon qilinmagan bo'lsa, bu o'zgaruvchi global scope ga tegishli bo'ladi
//----------------------------------------------------------------
//? local scope -> the area where a variable is defined inside of a function
//? local scope -> o'zgaruvchi funksiya tarkibida e'lon qilingan bo'lsa, bu o'zgaruvchi local scope ga tegishli bo'ladi
//----------------------------------------------------------------
//? function scope -> the area where a variable is defined inside of a function
//? function scope -> o'zgaruvchi funksiya tarkibida e'lon qilingan bo'lsa, bu o'zgaruvchi function scope ga tegishli bo'ladi
//----------------------------------------------------------------
//? block scope -> the area where a variable is defined inside of a block
//? block scope -> o'zgaruvchi blok tarkibida e'lon qilinmagan bo'lsa, bu o'zgaruvchi block scope ga tegishli bo'ladi
//? block -> if, for, while, switch, try, catch, etc.
//? block -> agar, for, while, switch, try, catch, va hokazo
//----------------------------------------------------------------

//? global scope
// var myVar = 'Hello World'; // global scope
// console.log(myVar); // Hello World
//----------------------------------------------------------------
//? local scope
// function myFunc() {
//     var myVar = 'Hello World'; // local scope
//     console.log(myVar); // Hello World
// }
// myFunc();
//----------------------------------------------------------------
//? function scope
// function myFunc() {
//     var myVar = 'Hello World'; // function scope
//     console.log(myVar); // Hello World
// }
// myFunc();
//----------------------------------------------------------------
//? block scope
// if (true) {
//     var myVar = 'Hello World'; // block scope
//     console.log(myVar); // Hello World
// }
//----------------------------------------------------------------
//? block scope
// switch (true) {
//     case true:
//         var myVar = 'Hello World'; // block scope
//         console.log(myVar); // Hello World
//         break;
// }
//----------------------------------------------------------------
//? block scope
// for (let i = 0; i < 10; i++) {
//     var myVar = 'Hello World'; // block scope
//     console.log(myVar); // Hello World
// }
//----------------------------------------------------------------
//? block scope
// while (true) {
//     var myVar = 'Hello World'; // block scope
//     console.log(myVar); // Hello World
//     break;
// } va h.k.
//----------------------------------------------------------------
//! functions 3 declaration, expression, arrow ✅
//? function declaration
// function myFunc() {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? function expression
// var myFunc = function () {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? arrow function
// var myFunc = () => {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------

//? functions declaration, expression, arrow hoisting ✅
//? function declaration
// myFunc(); // Hello World
// function myFunc() {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? function expression
// myFunc(); // TypeError: myFunc is not a function
// var myFunc = function () {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? expression function let
// myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
// let myFunc = function () {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? expression function const
// myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
// const myFunc = function () {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? arrow function
// myFunc(); // TypeError: myFunc is not a function
// var myFunc = () => {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? arrow function let
// myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
// let myFunc = () => {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------
//? arrow function const
// myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
// const myFunc = () => {
//     console.log('Hello World');
// }

// myFunc(); // Hello World
//----------------------------------------------------------------

//! if else statement ✅
//? if else statement -> if, else, else if
//? if else statement -> agar, aks holda, agar aks holda
//----------------------------------------------------------------
//? if statement
// if (true) {
//     console.log('Hello World');
// }
//----------------------------------------------------------------
//? if else statement
// if (false) {
//     console.log('Hello World');
// } else {
//     console.log('Hello World 2');
// }
//----------------------------------------------------------------
//? if else if statement
// if (false) {
//     console.log('Hello World');
// } else if (true) {
//     console.log('Hello World 2');
// } else {
//     console.log('Hello World 3');
// }

//! switch statement ✅
//? switch statement -> switch, case, default
//----------------------------------------------------------------
//? switch statement -> switch, case, default
// switch (true) {
//     case true:
//         console.log('Hello World');
//         break;
//     case false:
//         console.log('Hello World 2');
//         break;
//     default:
//         console.log('Hello World 3');
//         break;
// }
//----------------------------------------------------------------
