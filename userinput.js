// How to accept user input 
// 1. EASY WAY = WINDOW promot
//  2. PROFESSTIONAL MAY = HTML Textbox 

/*let username;   // this is the first way 
username = window.prompt("what's your username?");
console.log(username);*/

let username;

   document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("H1").textContent = `Hello ${username}`
   }

// type conversion = change the datatype of the a value of another
//                  (strings, numbers, booleams)



/*et age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(`you age is: ${age}`);
console.log(typeof age);*/



/*let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/


// const = a variale that can't be changed

let pi = 3.14159;
let radius;
let circumference;
radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);
circumference = 2* pi*radius;
console.log(`circumference of the circle is: ${circumference}`);
