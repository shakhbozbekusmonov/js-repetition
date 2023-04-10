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

//! for loops, while loops, do while loops, for in, for of ✅
//? for loops -> for, break, continue
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
//----------------------------------------------------------------
//? while loops -> while, break, continue
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
//----------------------------------------------------------------
//? do while loops -> do, while, break, continue
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 10);
//----------------------------------------------------------------
//? for in loops -> for, in, break, continue
// let obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// for (let key in obj) {
//     console.log(key);
// }
//----------------------------------------------------------------
//? for of loops -> for, of, break, continue
// let arr = ['John', 'Jane', 'Jack'];
// for (let value of arr) {
//     console.log(value);
// }
//----------------------------------------------------------------

//! try catch finally ✅
//? try catch finally -> try, catch, finally
// try {
//     console.log('Hello World');
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log('Hello World 2');
// }
//----------------------------------------------------------------

//! classes ✅
//? classes -> class, constructor, extends, super, static
//? classes -> sinf, konstruktor, extends, super, static
//----------------------------------------------------------------
//? class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// const person1 = new Person('John', 30);
// person1.greeting();
//----------------------------------------------------------------

//! modules ✅
//? modules -> import, export, default
//? modules -> import, export, default
//----------------------------------------------------------------
//? import
// import { myFunc } from './myModule.js';
// myFunc();
//----------------------------------------------------------------
//? export
// export const myFunc = () => {
//     console.log('Hello World');
// }
//----------------------------------------------------------------
//? default
// export default const myFunc = () => {
//     console.log('Hello World');
// }
//----------------------------------------------------------------

//! promises ✅
//? promises -> promise, then, catch, finally
//? promises -> promise, then, catch, finally
//----------------------------------------------------------------
//? promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World');
//     }, 1000);
// });
// myPromise.then((value) => {
//     console.log(value);
// });
//----------------------------------------------------------------

//! async await ✅
//? async await -> async, await, try, catch
//? async await -> async, await, try, catch
//----------------------------------------------------------------
//? async await
// const myFunc = async () => {
//     try {
//         const myPromise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Hello World');
//             }, 1000);
//         });
//         const value = await myPromise;
//         console.log(value);
//     } catch (error) {
//         console.log(error);
//     }
// }
// myFunc();
//----------------------------------------------------------------

//! destructuring ✅
//? destructuring -> array, object
//? destructuring -> array, object
//----------------------------------------------------------------
//? array destructuring
const arr = ["John", "Jane", "Jack"];
// const [name1, name2, name3] = arr;
// console.log(name1, name2, name3);
// const [name1, , name3] = arr;
// console.log(name1, name3);
// const [name1, ...rest] = arr;
// console.log(name1, rest);
//----------------------------------------------------------------
//? object destructuring
// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// const { name, age, city } = obj;
// console.log(name, age, city);
// const { name, , city } = obj; // SyntaxError: Unexpected token ,
// console.log(name, city);
// const { name: myName, age: myAge, city: myCity } = obj; // Re naming
// console.log(myName, myAge, myCity);
//----------------------------------------------------------------

//! spread operator ✅
//? spread operator -> array, object
//? spread operator -> array, object
//----------------------------------------------------------------
//? array spread operator
// const arr1 = ['John', 'Jane', 'Jack'];
// const arr2 = ['Mary', 'Mark', 'Mike'];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
//----------------------------------------------------------------
//? object spread operator
// const obj1 = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// const obj2 = {
//     name: 'Jane',
//     age: 25,
//     city: 'Los Angeles'
// }
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
//----------------------------------------------------------------

//! rest operator ✅
//? rest operator -> array, object
//? rest operator -> array, object
//----------------------------------------------------------------
//? array rest operator
// const arr = ['John', 'Jane', 'Jack'];
// const [name1, ...rest] = arr;
// console.log(name1, rest);
//----------------------------------------------------------------
//? object rest operator
// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }
// const { name, ...rest } = obj;
// console.log(name, rest);
//----------------------------------------------------------------

//! map ✅
//? map -> map, set, weakmap, weakset
//? map -> map, set, weakmap, weakset
//----------------------------------------------------------------
//? map methods -> set, get, has, delete, clear, size
// const myMap = new Map();
// const key1 = 'John';
// const key2 = { name: 'Jane' };
// const key3 = () => { console.log('Hello World') };
// myMap.set(key1, 'Hello World');
// myMap.set(key2, 'Hello World 2');
// myMap.set(key3, 'Hello World 3');
// console.log(myMap);
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
// console.log(myMap.size);
// console.log(myMap.has(key1));
// console.log(myMap.has(key2));
// console.log(myMap.has(key3));
// myMap.delete(key1);
// console.log(myMap);
// myMap.clear();
// console.log(myMap);
//----------------------------------------------------------------

//! set ✅
//? set -> map, set, weakmap, weakset
//? set -> map, set, weakmap, weakset
//----------------------------------------------------------------
//? set methods -> add, delete, has, clear, size
// const mySet = new Set();
// const key1 = 'John';
// const key2 = { name: 'Jane' };
// const key3 = () => { console.log('Hello World') };
// mySet.add(key1);
// mySet.add(key2);
// mySet.add(key3);
// console.log(mySet);
// console.log(mySet.size);
// console.log(mySet.has(key1));
// console.log(mySet.has(key2));
// console.log(mySet.has(key3));
// mySet.delete(key1);
// console.log(mySet);
// mySet.clear();
// console.log(mySet);
//----------------------------------------------------------------

//! weakmap ✅
//? weakmap -> map, set, weakmap, weakset
//? weakmap -> map, set, weakmap, weakset
//----------------------------------------------------------------
//? weakmap methods -> set, get, has, delete, size
// const myWeakMap = new WeakMap();
// const key1 = 'John';
// const key2 = { name: 'Jane' };
// const key3 = () => { console.log('Hello World') };
// myWeakMap.set(key1, 'Hello World');
// myWeakMap.set(key2, 'Hello World 2');
// myWeakMap.set(key3, 'Hello World 3');
// console.log(myWeakMap);
// console.log(myWeakMap.get(key1));
// console.log(myWeakMap.get(key2));
// console.log(myWeakMap.get(key3));
// console.log(myWeakMap.size);
// console.log(myWeakMap.has(key1));
// console.log(myWeakMap.has(key2));
// console.log(myWeakMap.has(key3));
// myWeakMap.delete(key1);
// console.log(myWeakMap);
// myWeakMap.clear();
// console.log(myWeakMap);
//----------------------------------------------------------------

//! weakset ✅
//? weakset -> map, set, weakmap, weakset
//? weakset -> map, set, weakmap, weakset
//----------------------------------------------------------------
//? weakset methods -> add, delete, has, clear, size
// const myWeakSet = new WeakSet();
// const key1 = 'John';
// const key2 = { name: 'Jane' };
// const key3 = () => { console.log('Hello World') };
// myWeakSet.add(key1);
// myWeakSet.add(key2);
// myWeakSet.add(key3);
// console.log(myWeakSet);
// console.log(myWeakSet.size);
// console.log(myWeakSet.has(key1));
// console.log(myWeakSet.has(key2));
// console.log(myWeakSet.has(key3));
// myWeakSet.delete(key1);
// console.log(myWeakSet);
// myWeakSet.clear();
// console.log(myWeakSet);
//----------------------------------------------------------------

//! use strict ✅
//? use strict -> strict mode
//? use strict -> strict mode
//----------------------------------------------------------------
//? strict mode -> use strict
// function myFunc() {
//     'use strict';
//     console.log(this);
// }
// myFunc();
//----------------------------------------------------------------

//! ternary operator ✅
//? ternary operator -> conditional operator
//? ternary operator -> conditional operator
//----------------------------------------------------------------
//? ternary operator
// const age = 20;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
//----------------------------------------------------------------

//! Date ✅
//? Date -> date, time
//? Date -> date, time
//----------------------------------------------------------------
//? date methods -> getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, getMilliseconds, getTime, getTimezoneOffset, getUTCDate, getUTCDay, getUTCFullYear, getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, now, parse, setDate, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds, setTime, setUTCDate, setUTCFullYear, setUTCHours, setUTCMilliseconds, setUTCMinutes, setUTCMonth, setUTCSeconds, toDateString, toISOString, toJSON, toLocaleDateString, toLocaleString, toLocaleTimeString, toString, toTimeString, toUTCString, UTC
// const now = new Date(); // 2021-07-01T10:00:00.000Z
// console.log(now); // 2021-07-01T10:00:00.000Z
// console.log(now.getFullYear()); // 2021
// console.log(now.getMonth()); // 6
// console.log(now.getDate()); // 1
// console.log(now.getDay()); // 1
// console.log(now.getHours()); // 10
// console.log(now.getMinutes()); // 0
// console.log(now.getSeconds()); // 0
// console.log(now.getMilliseconds()); // 0
// console.log(now.getTime()); // 1625126400000
// console.log(now.getTimezoneOffset()); // -180
// console.log(now.getUTCDate()); // 1
// console.log(now.getUTCDay()); // 1
// console.log(now.getUTCFullYear()); // 2021
// console.log(now.getUTCHours()); // 10
// console.log(now.getUTCMilliseconds()); // 0
// console.log(now.getUTCMinutes()); // 0
// console.log(now.getUTCMonth()); // 6
// console.log(now.getUTCSeconds()); // 0
// console.log(now.now()); // 1625126400000
// console.log(now.parse()); // NaN
// console.log(now.setDate()); // NaN
// console.log(now.setFullYear()); // NaN
// console.log(now.setHours()); // NaN
// console.log(now.setMilliseconds()); // NaN
// console.log(now.setMinutes()); // NaN
// console.log(now.setMonth()); // NaN
// console.log(now.setSeconds()); // NaN
// console.log(now.setTime()); // NaN
// console.log(now.setUTCDate()); // NaN
// console.log(now.setUTCFullYear()); // NaN
// console.log(now.setUTCHours()); // NaN
// console.log(now.setUTCMilliseconds()); // NaN
// console.log(now.setUTCMinutes()); // NaN
// console.log(now.setUTCMonth()); // NaN
// console.log(now.setUTCSeconds()); // NaN
// console.log(now.toDateString()); // Mon Jul 01 2021
// console.log(now.toISOString()); // 2021-07-01T10:00:00.000Z
// console.log(now.toJSON()); // 2021-07-01T10:00:00.000Z
// console.log(now.toLocaleDateString()); // 7/1/2021
// console.log(now.toLocaleString()); // 7/1/2021, 10:00:00 AM
// console.log(now.toLocaleTimeString()); // 10:00:00 AM
// console.log(now.toString()); // Mon Jul 01 2021 10:00:00 GMT+0300 (GMT+03:00)
// console.log(now.toTimeString()); // 10:00:00 GMT+0300 (GMT+03:00)
// console.log(now.toUTCString()); // Mon, 28 Jun 2021 21:00:00 GMT
// console.log(now.UTC()); // NaN
//----------------------------------------------------------------

//! Math ✅
//? Math -> math
//? Math -> math
//----------------------------------------------------------------
//? math methods -> E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2, abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos, cosh, exp, expm1, floor, fround, hypot, imul, log, log10, log1p, log2, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc
// console.log(Math.E); // 2.718281828459045
// console.log(Math.LN10); // 2.302585092994046
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LOG10E); // 0.4342944819032518
// console.log(Math.LOG2E); // 1.4426950408889634
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.SQRT1_2); // 0.7071067811865476
// console.log(Math.SQRT2); // 1.4142135623730951
// console.log(Math.abs(-5)); // 5
// console.log(Math.acos(0.5)); // 1.0471975511965979
// console.log(Math.acosh(3)); // 1.762747174039086
// console.log(Math.asin(0.5)); // 0.5235987755982988
// console.log(Math.asinh(3)); // 1.4436354751788103
// console.log(Math.atan(0.5)); // 0.4636476090008061
// console.log(Math.atan2(0.5, 0.5)); // 0.7853981633974483
// console.log(Math.atanh(0.5)); // 0.5493061443340549
// console.log(Math.cbrt(27)); // 3
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.clz32(1)); // 31
// console.log(Math.cos(1)); // 0.5403023058681398
// console.log(Math.cosh(1)); // 1.5430806348152437
// console.log(Math.exp(1)); // 2.718281828459045
// console.log(Math.expm1(1)); // 1.718281828459045
// console.log(Math.floor(4.4)); // 4
// console.log(Math.fround(1.337)); // 1.3370000123977661
// console.log(Math.hypot(3, 4)); // 5
// console.log(Math.imul(2, 2)); // 4
// console.log(Math.log(2)); // 0.6931471805599453
// console.log(Math.log10(2)); // 0.3010299956639812
// console.log(Math.log1p(1)); // 0.6931471805599453
// console.log(Math.log2(2)); // 1
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.pow(2, 2)); // 4
// console.log(Math.random()); // 0.123456789
// console.log(Math.round(4.4)); // 4
// console.log(Math.sign(-5)); // -1
// console.log(Math.sin(1)); // 0.8414709848078965
// console.log(Math.sinh(1)); // 1.1752011936438014
// console.log(Math.sqrt(4)); // 2
// console.log(Math.tan(1)); // 1.5574077246549023
// console.log(Math.tanh(1)); // 0.7615941559557649
// console.log(Math.trunc(4.4)); // 4
//----------------------------------------------------------------

//! Number ✅
//? Number -> number
//? Number -> number
//----------------------------------------------------------------
//? number methods -> EPSILON, MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE, NEGATIVE_INFINITY, POSITIVE_INFINITY, isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt, toExponential, toFixed, toLocaleString, toPrecision, toString
// console.log(Number.EPSILON); // 2.220446049250313e-16
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.NEGATIVE_INFINITY); // -Infinity
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(1)); // true
// console.log(Number.isInteger(1)); // true
// console.log(Number.isInteger(1.1)); // false
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(1)); // false
// console.log(Number.isSafeInteger(1)); // true
// console.log(Number.isSafeInteger(9007199254740992)); // false
// console.log(Number.parseFloat('1.1')); // 1.1
// console.log(Number.parseInt('1.1')); // 1
// console.log((1.1).toExponential()); // 1.1e+0
// console.log((1.1).toFixed(2)); // 1.10
// console.log((1.1).toLocaleString()); // 1.1
// console.log((1.1).toPrecision(2)); // 1.1
// console.log((1.1).toString()); // 1.1
//----------------------------------------------------------------

//! Object ✅
//? Object -> object
//? Object -> object
//----------------------------------------------------------------
//? object methods -> assign, create, defineProperties, defineProperty, entries, freeze, fromEntries, getOwnPropertyDescriptor, getOwnPropertyDescriptors, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf, is, isExtensible, isFrozen, isSealed, keys, preventExtensions, seal, setPrototypeOf, values
// console.log(Object.assign({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
// console.log(Object.create({ a: 1 })); // {}
// console.log(Object.defineProperties({ a: 1 }, { b: { value: 2 } })); // { a: 1, b: 2 }
// console.log(Object.defineProperty({ a: 1 }, 'b', { value: 2 })); // { a: 1, b: 2 }
// console.log(Object.entries({ a: 1, b: 2 })); // [ [ 'a', 1 ], [ 'b', 2 ] ]
// console.log(Object.freeze({ a: 1 })); // { a: 1 }
// console.log(Object.fromEntries([['a', 1], ['b', 2]])); // { a: 1, b: 2 }
// console.log(Object.getOwnPropertyDescriptor({ a: 1 }, 'a')); // { value: 1, writable: true, enumerable: true, configurable: true }
// console.log(Object.getOwnPropertyDescriptors({ a: 1 })); // { a: { value: 1, writable: true, enumerable: true, configurable: true } }
// console.log(Object.getOwnPropertyNames({ a: 1 })); // [ 'a' ]
// console.log(Object.getOwnPropertySymbols({ a: 1 })); // []
// console.log(Object.getPrototypeOf({ a: 1 })); // {}
// console.log(Object.is(1, 1)); // true
// console.log(Object.isExtensible({ a: 1 })); // true
// console.log(Object.isFrozen({ a: 1 })); // false
// console.log(Object.isSealed({ a: 1 })); // false
// console.log(Object.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
// console.log(Object.preventExtensions({ a: 1 })); // { a: 1 }
// console.log(Object.seal({ a: 1 })); // { a: 1 }
// console.log(Object.setPrototypeOf({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
// console.log(Object.values({ a: 1, b: 2 })); // [ 1, 2 ]
//----------------------------------------------------------------

//! Reflect ✅
//? Reflect -> object
//? Reflect -> object
//----------------------------------------------------------------
//? object methods -> apply, construct, defineProperty, deleteProperty, get, getOwnPropertyDescriptor, getPrototypeOf, has, isExtensible, ownKeys, preventExtensions, set, setPrototypeOf
// console.log(Reflect.apply(Math.floor, undefined, [1.75])); // 1
// console.log(Reflect.construct(Array, [1, 2, 3])); // [ 1, 2, 3 ]
// console.log(Reflect.defineProperty({ a: 1 }, 'b', { value: 2 })); // { a: 1, b: 2 }
// console.log(Reflect.deleteProperty({ a: 1 }, 'a')); // true
// console.log(Reflect.get({ a: 1 }, 'a')); // 1
// console.log(Reflect.getOwnPropertyDescriptor({ a: 1 }, 'a')); // { value: 1, writable: true, enumerable: true, configurable: true }
// console.log(Reflect.getPrototypeOf({ a: 1 })); // {}
// console.log(Reflect.has({ a: 1 }, 'a')); // true
// console.log(Reflect.isExtensible({ a: 1 })); // true
// console.log(Reflect.ownKeys({ a: 1 })); // [ 'a' ]
// console.log(Reflect.preventExtensions({ a: 1 })); // { a: 1 }
// console.log(Reflect.set({ a: 1 }, 'b', 2)); // true
// console.log(Reflect.setPrototypeOf({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
//----------------------------------------------------------------

//! RegExp ✅
//? RegExp -> function
//? RegExp -> function
//----------------------------------------------------------------
//? function methods -> exec, test
// console.log(new RegExp('a', 'g').exec('abc')); // [ 'a', index: 0, input: 'abc', groups: undefined ]
// console.log(new RegExp('a', 'g').test('abc')); // true
//? regular expression -> /pattern/flags
// console.log(/a/g.exec('abc')); // [ 'a', index: 0, input: 'abc', groups: undefined ]
// console.log(/a/g.test('abc')); // true
//? password validation -> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
//? email validation -> /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//? phone number 998 (xx) xxx-xx-xx -> /^998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/g
//----------------------------------------------------------------

//! String ✅
//? String -> string
//? String -> string
//----------------------------------------------------------------
//? string methods -> charAt, charCodeAt, codePointAt, concat, endsWith, includes, indexOf, lastIndexOf, localeCompare, match, normalize, padEnd, padStart, repeat, replace, search, slice, split, startsWith, substr, substring, toLocaleLowerCase, toLocaleUpperCase, toLowerCase, toString, toUpperCase, trim, trimEnd, trimStart, valueOf
// console.log('abc'.charAt(0)); // a
// console.log('abc'.charCodeAt(0)); // 97
// console.log('abc'.codePointAt(0)); // 97
// console.log('abc'.concat('def')); // abcdef
// console.log('abc'.endsWith('c')); // true
// console.log('abc'.includes('b')); // true
// console.log('abc'.indexOf('b')); // 1
// console.log('abc'.lastIndexOf('b')); // 1
// console.log('abc'.localeCompare('abc')); // 0
// console.log('abc'.match(/a/g)); // [ 'a' ]
// console.log('abc'.normalize()); // abc
// console.log('abc'.padEnd(5, 'def')); // abcde
// console.log('abc'.padStart(5, 'def')); // deabc
// console.log('abc'.repeat(2)); // abcabc
// console.log('abc'.replace('a', 'd')); // dbc
// console.log('abc'.search(/a/g)); // 0
// console.log('abc'.slice(0, 1)); // a
// console.log('abc'.split('')); // [ 'a', 'b', 'c' ]
// console.log('abc'.startsWith('a')); // true
// console.log('abc'.substr(0, 1)); // a
// console.log('abc'.substring(0, 1)); // a
// console.log('abc'.toLocaleLowerCase()); // abc
// console.log('abc'.toLocaleUpperCase()); // ABC
// console.log('abc'.toLowerCase()); // abc
// console.log('abc'.toString()); // abc
// console.log('abc'.toUpperCase()); // ABC
// console.log(' abc '.trim()); // abc
// console.log(' abc '.trimEnd()); //  abc
// console.log(' abc '.trimStart()); // abc
// console.log('abc'.valueOf()); // abc
//----------------------------------------------------------------

//! Symbol ✅
//? Symbol -> symbol
//? Symbol -> symbol
//----------------------------------------------------------------
//? symbol methods -> description, for, keyFor, toString, valueOf
// console.log(Symbol('a').description); // a
// console.log(Symbol.for('a')); // Symbol(a)
// console.log(Symbol.keyFor(Symbol.for('a'))); // a
// console.log(Symbol('a').toString()); // Symbol(a)
// console.log(Symbol('a').valueOf()); // Symbol(a)
//----------------------------------------------------------------

//! Array ✅
//? Array -> array
//? Array -> array
//----------------------------------------------------------------
//? array methods -> concat, copyWithin, entries, every, fill, filter, find, findIndex, flat, flatMap, forEach, includes, indexOf, join, keys, lastIndexOf, length, map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toLocaleString, toString, unshift, values
// console.log([1, 2, 3].concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
//* concat -> merge arrays, add items to array, concat arrayni ichiga array qo'shish
// console.log([1, 2, 3].copyWithin(0, 1, 2)); // [ 2, 2, 3 ]
//* copyWithin -> arrayni ichidagi elementlarni o'zgartirish
// console.log([1, 2, 3].entries()); // [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ]
//* entries -> arrayni ichidagi elementlarni index va value bilan qaytaradi
// console.log([1, 2, 3].every((item) => item > 0)); // true
//* every -> arrayni ichidagi elementlarni tekshiradi, bitta element ham false bo'lsa false qaytaradi
// console.log([1, 2, 3].fill(0)); // [ 0, 0, 0 ]
//* fill -> arrayni ichidagi elementlarni o'zgartirish
// console.log([1, 2, 3].filter((item) => item > 1)); // [ 2, 3 ]
//* filter -> arrayni ichidagi elementlarni filter qiladi
// console.log([1, 2, 3].find((item) => item > 1)); // 2
//* find -> arrayni ichidan bitta elementni qaytaradi
// console.log([1, 2, 3].findIndex((item) => item > 1)); // 1
//* findIndex -> arrayni ichidan bitta elementning indexini qaytaradi
// console.log([1, 2, 3].flat()); // [ 1, 2, 3 ]
//* flat -> arrayni ichidagi arraylarni [] qavslarini olib tashlaydi
// console.log([1, 2, 3].flatMap((item) => item + 1)); // [ 2, 3, 4 ]
//* flatMap -> arrayni ichidagi arraylarni qavslarini olib tashlaydi va arrayni map singari aylanib chiqadi
// console.log([1, 2, 3].forEach((item) => console.log(item))); // undefined
//* forEach -> arrayni aylanib chiqib bitta bitta elementlarni chiqaradi
// console.log([1, 2, 3].includes(1)); // true
//* includes -> arrayni ichidagi berilgan elementni tekshiradi, agar bo'lsa true qaytaradi, aks holda false
// console.log([1, 2, 3].indexOf(1)); // 0
//* indexOf -> arrayni berilgan elementni indexini qaytaradi
// console.log([1, 2, 3].join('')); // 123
//* join -> arrayni ichidagi elementlarni bitta stringga aylantiradi
// console.log([1, 2, 3].keys()); // [ 0, 1, 2 ]
//* keys -> arrayni ichidagi elementlarni indexini qaytaradi
// console.log([1, 2, 3].lastIndexOf(1)); // 0
//* lastIndexOf -> arrayni berilgan elementni oxirgi indexini qaytaradi
// console.log([1, 2, 3].length); // 3
//* length -> arrayni uzunligini qaytaradi
// console.log([1, 2, 3].map((item) => item + 1)); // [ 2, 3, 4 ]
//* map -> arrayni aylanib chiqadi va qayta chizib beradi
// console.log([1, 2, 3].pop()); // 3
//* pop -> arrayni oxirgi elementini olib tashlaydi
// console.log([1, 2, 3].push(4)); // 4
//* push -> arrayga yangi element qo'shadi
// console.log([1, 2, 3].reduce((acc, item) => acc + item)); // 6
//* reduce -> arrayni ichidagi elementlarni bitta qiymatga aylantiradi
// console.log([1, 2, 3].reduceRight((acc, item) => acc + item)); // 6
//* reduceRight -> arrayni ichidagi elementlarni bitta qiymatga aylantiradi
// console.log([1, 2, 3].reverse()); // [ 3, 2, 1 ]
//* reverse -> arrayni o'zini teskari o'zgartiradi
// console.log([1, 2, 3].shift()); // 1
//* shift -> arrayni birinchi elementini olib tashlaydi
// console.log([1, 2, 3].slice(0, 1)); // [ 1 ]
//* slice -> arrayni bir qismini olib tashlaydi
// console.log([1, 2, 3].some((item) => item > 1)); // true
//* some -> arrayni ichidagi elementini tekshiradi va bitta element ham true bo'lsa true qaytaradi
// console.log([1, 2, 3].sort((a, b) => b - a)); // [ 3, 2, 1 ]
//* sort -> arrayni ichidan elementlarni o'zgartiradi, ya'ni sortlab beradi
// console.log([1, 2, 3].splice(0, 1)); // [ 1 ]
//* splice -> arrayni bir qismini olib tashlaydi
// console.log([1, 2, 3].toLocaleString()); // 1,2,3
//* toLocaleString -> arrayni ichidagi elementlarni stringga aylantiradi
// console.log([1, 2, 3].toString()); // 1,2,3
//* toString -> arrayni ichidagi elementlarni stringga aylantiradi
// console.log([1, 2, 3].unshift(0)); // 4
//* unshift -> arrayga birinchi element qo'shadi
// console.log([1, 2, 3].values()); // [ 1, 2, 3 ]
//* values -> arrayni ichidagi elementlarni qaytaradi
//----------------------------------------------------------------

//! BigInt -> 2^53 - 1 dan katta sonlar uchun ishlatiladi (2^53 - 1 = 9007199254740991)
// console.log(9007199254740991n); // 9007199254740991n
// console.log(9007199254740992n); // 9007199254740992n
// console.log(9007199254740991n + 1n); // 9007199254740992n
// console.log(9007199254740991n + 1); // 9007199254740992
// console.log(9007199254740991n + 1.1); // 9007199254740992
// console.log(9007199254740991n + 1.1n); // error
// console.log(9007199254740991n + BigInt(1)); // 9007199254740992n
// console.log(9007199254740991n + BigInt(1.1)); // error
// console.log(9007199254740991n + BigInt('1')); // 9007199254740992n
// console.log(9007199254740991n + BigInt('1.1')); // error
// console.log(9007199254740991n + BigInt(true)); // 9007199254740992n
// console.log(9007199254740991n + BigInt(false)); // 9007199254740991n
// console.log(9007199254740991n + BigInt(null)); // 9007199254740991n
// console.log(9007199254740991n + BigInt(undefined)); // error
// console.log(9007199254740991n + BigInt('')); // error
// console.log(9007199254740991n + BigInt(' ')); // error
// console.log(9007199254740991n + BigInt(' 1')); // error
// console.log(9007199254740991n + BigInt('1 ')); // error
// console.log(9007199254740991n + BigInt(' 1 ')); // error
// console.log(9007199254740991n + BigInt('1.1')); // error
// console.log(9007199254740991n + BigInt('1.1 ')); // error
// console.log(9007199254740991n + BigInt(' 1.1')); // error
// console.log(9007199254740991n + BigInt(' 1.1 ')); // error
// console.log(9007199254740991n + BigInt('1,1')); // error
// console.log(9007199254740991n + BigInt('1,1 ')); // error
// console.log(9007199254740991n + BigInt(' 1,1')); // error
// console.log(9007199254740991n + BigInt(' 1,1 ')); // error
// console.log(9007199254740991n + BigInt('1,1.1')); // error
// console.log(9007199254740991n + BigInt('1,1.1 ')); // error

// console.log(9007199254740991n + BigInt('1e1')); // 90071992547409920n
// console.log(9007199254740991n + BigInt('1e1 ')); // error
// console.log(9007199254740991n + BigInt(' 1e1')); // error
// console.log(9007199254740991n + BigInt(' 1e1 ')); // error
// console.log(9007199254740991n + BigInt('1e1.1')); // error
// console.log(9007199254740991n + BigInt('1e1.1 ')); // error
// console.log(9007199254740991n + BigInt(' 1e1.1')); // error
// console.log(9007199254740991n + BigInt(' 1e1.1 ')); // error
// console.log(9007199254740991n + BigInt('1e1,1')); // error
// console.log(9007199254740991n + BigInt('1e1,1 ')); // error
// console.log(9007199254740991n + BigInt(' 1e1,1')); // error
// console.log(9007199254740991n + BigInt(' 1e1,1 ')); // error
// console.log(9007199254740991n + BigInt('1e1,1.1')); // error
// console.log(9007199254740991n + BigInt('1e1,1.1 ')); // error
// console.log(9007199254740991n + BigInt(' 1e1,1.1')); // error
// console.log(9007199254740991n + BigInt(' 1e1,1.1 ')); // error
//----------------------------------------------------------------

//! Boolean -> true yoki false qiymatlarini qabul qiladi
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-1)); // true
// console.log(Boolean(1.1)); // true
// console.log(Boolean(-1.1)); // true
// console.log(Boolean(1e1)); // true
// console.log(Boolean(-1e1)); // true
// console.log(Boolean(1e1.1)); // true
// console.log(Boolean(-1e1.1)); // true
// console.log(Boolean(1e1,1)); // true
// console.log(Boolean(-1e1,1)); // true
// console.log(Boolean(1e1,1.1)); // true
// console.log(Boolean(-1e1,1.1)); // true
// console.log(Boolean('1')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean('-1')); // true
// console.log(Boolean('1.1')); // true
// console.log(Boolean('-1.1')); // true
// console.log(Boolean('1e1')); // true
// console.log(Boolean('-1e1')); // true
// console.log(Boolean('1e1.1')); // true
// console.log(Boolean('-1e1.1')); // true
// console.log(Boolean('1e1,1')); // true
// console.log(Boolean('-1e1,1')); // true
// console.log(Boolean('1e1,1.1')); // true
// console.log(Boolean('-1e1,1.1')); // true
// console.log(Boolean(' ')); // true
// console.log(Boolean('  ')); // true
// console.log(Boolean('   ')); // true
// console.log(Boolean('')); // false
// ----------------------------------------------------------------

//! Undefined -> qiymati aniqlanmagan qiymat
// console.log(undefined); // undefined
// console.log(typeof undefined); // undefined
// console.log(typeof undefined === 'undefined'); // true
// console.log(typeof undefined === 'object'); // false
// console.log(typeof undefined === 'number'); // false
// console.log(typeof undefined === 'string'); // false
// console.log(typeof undefined === 'boolean'); // false
// console.log(typeof undefined === 'bigint'); // false
// console.log(typeof undefined === 'symbol'); // false
// console.log(typeof undefined === 'function'); // false
// console.log(typeof undefined === 'null'); // false
// console.log(typeof undefined === 'array'); // false
// console.log(typeof undefined === 'object'); // false
// console.log(typeof undefined === 'NaN'); // false
// console.log(typeof undefined === 'Infinity'); // false
// console.log(typeof undefined === 'null'); // false
//----------------------------------------------------------------

//! Null -> qiymati bo'sh qiymat
// console.log(null); // null
// console.log(typeof null); // object
// console.log(typeof null === 'undefined'); // false
// console.log(typeof null === 'object'); // true
// console.log(typeof null === 'number'); // false
// console.log(typeof null === 'string'); // false
// console.log(typeof null === 'boolean'); // false
// console.log(typeof null === 'bigint'); // false
// console.log(typeof null === 'symbol'); // false
// console.log(typeof null === 'function'); // false
// console.log(typeof null === 'null'); // false
// console.log(typeof null === 'array'); // false
// console.log(typeof null === 'object'); // true
// console.log(typeof null === 'NaN'); // false
// console.log(typeof null === 'Infinity'); // false
// console.log(typeof null === 'null'); // false
//----------------------------------------------------------------

//! Math and Logical Operators
// console.log(1 + 1); // 2
// console.log(1 - 1); // 0
// console.log(1 * 1); // 1
// console.log(1 / 1); // 1
// console.log(1 % 1); // 0
// console.log(1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 / 1 % 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1 ** 1); // 1
// console.log(1 + 1 - 1 * 1 /
// 1 %
// ----------------------------------------------------------------

//! Logical Operators
// console.log(1 && 1); // 1
// console.log(1 && 0); // 0
// console.log(0 && 1); // 0
// console.log(0 && 0); // 0
// console.log(1 || 1); // 1
// console.log(1 || 0); // 1
// console.log(0 || 1); // 1
// console.log(0 || 0); // 0
// console.log(!1); // false
// console.log(!0); // true
// console.log(!'1'); // false
// console.log(!'0'); // false
// console.log(!''); // true
// console.log(!' '); // false
//----------------------------------------------------------------

//! Comparison Operators
// console.log(1 == 1); // true
// console.log(1 == 0); // false
// console.log(0 == 1); // false
// console.log(0 == 0); // true
// console.log(1 == '1'); // true
// console.log(1 == '0'); // false
// console.log(0 == '1'); // false
// console.log(0 == '0'); // true
// console.log(1 == '1.1'); // false
// console.log(1 == '0.1'); // false
// console.log(0 == '1.1'); // false
// console.log(0 == '0.1'); // false
// console.log(1 == '1e1'); // false
// console.log(1 == '0e1'); // false
// console.log(0 == '1e1'); // false
// console.log(0 == '0e1'); // false
// console.log(1 == '1e1.1'); // false
// console.log(1 == '0e1.1'); // false
// console.log(0 == '1e1.1'); // false
// console.log(0 == '0e1.1'); // false
// console.log(1 == '1e1,1'); // false
// console.log(1 == '0e1,1'); // false
// console.log(0 == '1e1,1'); // false
// console.log(0 == '0e1,1'); // false
// console.log(1 == '1e1 1'); // false
// console.log(1 == '0e1 1'); // false
// console.log(0 == '1e1 1'); // false
// console.log(0 == '0e1 1'); // false
// console.log(1 == '1e1 1.1'); // false
// console.log(1 == '0e1 1.1'); // false
// console.log(0 == '1e1 1.1'); // false
// console.log(0 == '0e1 1.1'); // false
// console.log(1 == '1e1 1,1'); // false
// console.log(1 == '0e1 1,1'); // false
// console.log(0 == '1e1 1,1'); // false
// console.log(0 == '0e1 1,1'); // false
// console.log(1 == '1e1 1 1'); // false
// console.log(1 == '0e1 1 1'); // false
// console.log(0 == '1e1 1 1'); // false
// console.log(0 == '0e1 1 1'); // false
// console.log(1 == '1e1 1 1.1'); // false
// console.log(1 == '0e1 1 1.1'); // false
//----------------------------------------------------------------

//! this bind call apply and new
// const obj = {
//   name: 'obj',
//   getName: function () {
//     return this.name;
//   },
// };
// console.log(obj.getName()); // obj
// const getName = obj.getName;
// console.log(getName()); // undefined
// const getNameBind = obj.getName.bind(obj);
// console.log(getNameBind()); // obj
// const getNameCall = obj.getName.call(obj);
// console.log(getNameCall); // obj
// const getNameApply = obj.getName.apply(obj);
// console.log(getNameApply); // obj
// const getNameNew = new obj.getName();
// console.log(getNameNew); // obj
//----------------------------------------------------------------

//! throw and try catch
// const obj = {
//   name: 'obj',
//   getName: function () {
//     return this.name;
//   },
// };
// const getName = obj.getName;
// try {
//   console.log(getName()); // undefined
// } catch (error) {
//   console.log(error); // TypeError: Cannot read property 'name' of undefined
// }
//----------------------------------------------------------------

//! localStorage and sessionStorage and cookies
// localStorage.setItem('name', 'localStorage');
// sessionStorage.setItem('name', 'sessionStorage');
// document.cookie = 'name=cookie';
// console.log(localStorage.getItem('name')); // localStorage
// console.log(sessionStorage.getItem('name')); // sessionStorage
// console.log(document.cookie); // name=cookie
//----------------------------------------------------------------

//! setTimeout and setInterval
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// setInterval(() => {
//   console.log('setInterval');
// }, 0);
// console.log('console.log');
//----------------------------------------------------------------

//! DOM and BOM
// console.log(document); // HTMLDocument
// console.log(window); // Window
// console.log(document.body); // HTMLBodyElement
// console.log(window.document.body); // HTMLBodyElement
// console.log(document.body === window.document.body); // true
//----------------------------------------------------------------

//! DOM methods
// console.log(document.getElementById('id')); // HTMLDivElement
// console.log(document.getElementsByClassName('class')); // HTMLCollection
// console.log(document.getElementsByTagName('div')); // HTMLCollection
// console.log(document.querySelector('div')); // HTMLDivElement
// console.log(document.querySelectorAll('div')); // NodeList
//----------------------------------------------------------------

//! DOM properties
// console.log(document.body); // HTMLBodyElement
// console.log(document.body.children); // HTMLCollection
// console.log(document.body.childNodes); // NodeList
// console.log(document.body.firstChild); // Text
// console.log(document.body.firstElementChild); // HTMLDivElement
// console.log(document.body.lastChild); // Text
// console.log(document.body.lastElementChild); // HTMLDivElement
// console.log(document.body.parentNode); // HTMLHtmlElement
// console.log(document.body.parentElement); // HTMLHtmlElement
// console.log(document.body.previousSibling); // Text
// console.log(document.body.previousElementSibling); // null
// console.log(document.body.nextSibling); // Text
// console.log(document.body.nextElementSibling); // null
//----------------------------------------------------------------

//! DOM events
// const button = document.getElementById('button');
// button.addEventListener('click', () => {
//   console.log('click');
// });
// button.addEventListener('mouseover', () => {
//   console.log('mouseover');
// });
// button.addEventListener('mouseout', () => {
//   console.log('mouseout');
// });
// button.addEventListener('mousedown', () => {
//   console.log('mousedown');
// });
// button.addEventListener('mouseup', () => {
//   console.log('mouseup');
// });
// button.addEventListener('mousemove', () => {
//   console.log('mousemove');
// });
// button.addEventListener('mouseenter', () => {
//   console.log('mouseenter');
// });
// button.addEventListener('mouseleave', () => {
//   console.log('mouseleave');
// });
// button.addEventListener('keydown', () => {
//   console.log('keydown');
// });
// button.addEventListener('keyup', () => {
//   console.log('keyup');
// });
// button.addEventListener('keypress', () => {
//   console.log('keypress');
// });
// button.addEventListener('focus', () => {
//   console.log('focus');
// });
// button.addEventListener('blur', () => {
//   console.log('blur');
// });
// button.addEventListener('change', () => {
//   console.log('change');
// });
// button.addEventListener('submit', () => {
//   console.log('submit');
// });
// button.addEventListener('load', () => {
//   console.log('load');
// });
// button.addEventListener('unload', () => {
//   console.log('unload');

// });
// button.addEventListener('resize', () => {
//   console.log('resize');
// });
// button.addEventListener('scroll', () => {
//   console.log('scroll');
// });
// button.addEventListener('select', () => {
//   console.log('select');
// });
// button.addEventListener('copy', () => {
//   console.log('copy');
// });
// button.addEventListener('cut', () => {
//   console.log('cut');
// });
// button.addEventListener('paste', () => {
//   console.log('paste');
// });
// button.addEventListener('contextmenu', () => {
//   console.log('contextmenu');

// });
// button.addEventListener('dblclick', () => {
//   console.log('dblclick');
// });
// button.addEventListener('drag', () => {
//   console.log('drag');
// });
// button.addEventListener('dragend', () => {
//   console.log('dragend');
// });
// button.addEventListener('dragenter', () => {
//   console.log('dragenter');
// });
// button.addEventListener('dragleave', () => {
//   console.log('dragleave');
// });
// button.addEventListener('dragover', () => {
//   console.log('dragover');
// });
// button.addEventListener('dragstart', () => {
//   console.log('dragstart');
// });
// button.addEventListener('drop', () => {
//   console.log('drop');
// });
// button.addEventListener('input', () => {
//   console.log('input');
// });
// button.addEventListener('invalid', () => {
//   console.log('invalid');
// });
// button.addEventListener('reset', () => {
//   console.log('reset');
// });
// button.addEventListener('search', () => {
//   console.log('search');
// });
// button.addEventListener('select', () => {
//   console.log('select');
// });
// button.addEventListener('touchstart', () => {
//   console.log('touchstart');
// });
// button.addEventListener('touchmove', () => {
//   console.log('touchmove');
// });
// button.addEventListener('touchend', () => {
//   console.log('touchend');
// });
// button.addEventListener('touchcancel', () => {
//   console.log('touchcancel');
// });
//----------------------------------------------------------------

//! DOM manipulation
// const button = document.getElementById('button');
// button.style.color = 'red';
// button.style.backgroundColor = 'blue';
// button.style.fontSize = '20px';
// button.style.border = '1px solid black';
// button.style.borderRadius = '5px';
// button.style.padding = '10px';
// button.style.margin = '10px';
// button.style.display = 'block';
// button.style.width = '100px';
// button.style.height = '100px';
// button.style.textAlign = 'center';
// button.style.lineHeight = '100px';
// button.style.position = 'absolute';
// button.style.top = '50px';
// button.style.left = '50px';
// button.style.transform = 'translate(-50%, -50%)';

// button.style.cssText = `
//   color: red;
//   background-color: blue;
//   font-size: 20px;
//   border: 1px solid black;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 10px;
//   display: block;
//   width: 100px;
//   height: 100px;
//   text-align: center;
//   line-height: 100px;
//   position: absolute;
//   top: 50px;
//   left: 50px;
//   transform: translate(-50%, -50%);
// `;
//----------------------------------------------------------------

//! BOM (Browser Object Model)
// console.log(window); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// conosle.log(window.innerHeight); // 768
// conosle.log(window.innerWidth); // 1366
// conosle.log(window.outerHeight); // 768
// conosle.log(window.outerWidth); // 1366
// conosle.log(window.scrollX); // 0
// conosle.log(window.scrollY); // 0
// conosle.log(window.location); // Location {ancestorOrigins: DOMStringList, href: "http://
// conosle.log(window.location.href); // http://
// conosle.log(window.location.hostname); // localhost
// conosle.log(window.location.port); // 5500
// conosle.log(window.location.protocol); // http:
// conosle.log(window.location.search); //
// conosle.log(window.location.hash); //
// conosle.log(window.location.pathname); // /index.html
// conosle.log(window.location.origin); // http://localhost:5500
// window.location.href = 'https://www.google.com';
// window.location.reload();
// window.location.replace('https://www.google.com');
// window.location.assign('https://www.google.com');
// window.history.back(); // go back
// window.history.forward(); // go forward
// window.history.go(-1); // go back
// window.history.go(1); // go forward
// window.history.go(2); // go forward
// window.history.go(-2); // go back
// window.history.go(0); // reload
// window.history.go(); // reload
// window.history.length; // 2
// window.history.state; // null
// window.history.scrollRestoration; // auto
// window.history.scrollRestoration = 'manual';
// window.history.scrollRestoration; // manual
// window.history.scrollRestoration = 'auto';
// window.history.scrollRestoration; // auto
// window.history.pushState({name: 'John'}, 'John', 'john.html');
// window.open('https://www.google.com', '_blank', 'width=400, height=400');
// window.close();
// window.print();
// window.alert('Hello');
// window.confirm('Are you sure?');
// window.prompt('Enter your name');
// window.scrollBy(0, 100);
// window.scrollTo(0, 100);
// window.scroll(0, 100);
// window.scrollX; // 0
// window.scrollY; // 0
// window.scroll(0, 100);
// window.scrollX; // 0
// window.scrollY; // 100
// window.scroll(0, 200);
// window.scrollX; // 0
// window.scrollY; // 200
// window.scroll(0, 300);
// window.scrollX; // 0
// window.scrollY; // 300
// window.scroll(0, 400);
// window.scrollX; // 0
// window.scrollY; // 400
//----------------------------------------------------------------

// window.print();
// window.alert('Hello');
// window.scroll(0, 100);
// window.open('https://www.google.com', '_blank', 'width=400, height=400');
// window.close();

// addEventListener("blur", () => {
//     document.title = "Oshna qayt :("
// });

// addEventListener("focus", () => {
//     document.title = "Oshna qaytdi :)"
// });

//! fetch API
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => {
//     const ul = document.createElement('ul');
//     document.body.appendChild(ul);
//     data.forEach((user) => {
//       const li = document.createElement('li');
//       li.textContent = user.name;
//       ul.appendChild(li);
//     });
//   });

//! async await fetch API
// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   const ul = document.createElement('ul');
//   document.body.appendChild(ul);
//   data.forEach((user) => {
//     const li = document.createElement('li');
//     li.textContent = user.name;
//     ul.appendChild(li);
//   });
// }
// getUsers();

//! async await try catch fetch API method GET
// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     const ul = document.createElement('ul');
//     document.body.appendChild(ul);
//     data.forEach((user) => {
//       const li = document.createElement('li');
//       li.textContent = user.name;
//       ul.appendChild(li);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();

//! async await try catch fetch API method POST
// async function createUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'John Doe',
//         age: 30,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// createUser();

//! async await try catch fetch API method PUT
// async function updateUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
//       method: 'PUT',
//       body: JSON.stringify({
//         name: 'John Doe',
//         age: 30,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateUser();

//! async await try catch fetch API method DELETE
// async function deleteUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
//       method: 'DELETE',
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteUser();

//! async await try catch fetch API method PATCH
// async function updateUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
//       method: 'PATCH',
//       body: JSON.stringify({
//         name: 'John Doe',
//         age: 30,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateUser();

//! async await try catch fetch API method HEAD
// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'HEAD',
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();

//! async await try catch fetch API method OPTIONS
// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'OPTIONS',
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();

//! async await try catch fetch API method CONNECT
// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'CONNECT',
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();

//! XMLHttpRequest (XHR)
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.response);
//     const ul = document.createElement('ul');
//     document.body.appendChild(ul);
//     data.forEach((user) => {
//       const li = document.createElement('li');
//       li.textContent = user.name;
//       ul.appendChild(li);
//     });
//   } else {
//     console.log('Error');
//   }
// };

//! XMLHttpRequest (XHR) POST
// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
// xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
// xhr.send(
//   JSON.stringify({
//     name: 'John Doe',
//     age: 30,
//   })
// );
// xhr.onload = () => {
//   if (xhr.status === 201) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   } else {
//     console.log('Error');
//   }
// };

//! XMLHttpRequest (XHR) PUT
// const xhr = new XMLHttpRequest();
// xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users/1');
// xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
// xhr.send(
//   JSON.stringify({
//     name: 'John Doe',
//     age: 30,
//   })
// );
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   } else {
//     console.log('Error');
//   }
// };

//! XMLHttpRequest (XHR) DELETE
// const xhr = new XMLHttpRequest();

// xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users/1');
// xhr.send();
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   } else {
//     console.log('Error');
//   }
// };

