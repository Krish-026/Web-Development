const prompt = require("prompt-sync")();

let num = prompt("Enter a number to find sum of n natural number : ");
num = Number.parseInt(num);
let sum = 0;
for(let i = 1; i <= num; ++i) sum += i;
console.log("Sum of " + num + " natural number is " + sum);
 const obj = {
    A : 1,
    C : true,
    D : false,
    B : 1.0,
 }

 for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
 }

 for(let i of "Krishna") console.log(i);