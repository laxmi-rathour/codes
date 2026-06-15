// variable = A container that stores a value.
//Bahaves as if it were the valueit contains

// 1. declaration    let x;
// 2. assignment     x = 100;



let age = 25;
let name;
name= "manvi"

console.log(typeof name);
console.log(`my age is ${age}.`);
console.log(`my name is ${name}.`);


// true or false are datatype is boolean 
let online = false; 
let forsale = true;


console.log(typeof online);
console.log(`Is is car for sale: ${forsale}`);


// arithmetic operators = operands ( values variables , etc.)
//        operators(+, - , *, /)
//        ex. 11 = x+;

// let students = 31;

// students = students + 1;
// students = students - 1;
// students = students / 2;
// students = students * 3;
// students = students ** 4;
// students= students % 2;

//  let extraStudents =  students % 3;
// console.log(extraStudents);

// students += 1;
// students -=1;
// students *=2;
// students %=2;
// students **=3;
// students /= 2;
// students --;
// students ++;

// console.log(students);

/*
   operator precedence
   1. parenthesis()
   2. exponents
   3. multiplication & division & modulo
   4. addition & subtration
*/

let result = 12 % 5 + 8/2;
console.log( `Result of this is : ${result}`);

let solution = 6 / 2 **(2 +5);
console.log(`Solution is: ${solution}`);

// How to accept user input 
// 1. EASY WAY = WINDOW promot
//  2. PROFESSTIONAL MAY = HTML Textbox 

/*let username;   // this is the first way 
username = window.prompt("what's your username?");
console.log(username);*

