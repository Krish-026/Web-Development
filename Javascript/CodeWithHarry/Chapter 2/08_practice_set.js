const prompt = require("prompt-sync")();
// let a = prompt("Enter Your age : ");
// a = Number.parseInt(a);
// if(a < 18){
//     console.log("You are not eligible");
// }
// else{
//     console.log("You are eligible");
// }




let num = prompt("Enter the number : ");
num = Number.parseInt(num);
if(num&1){
    console.log("Num is odd");
}
else console.log("Num is even");


let age = 19;
let a = age > 18? "You can drive" : "You can't driva";
console.log(a);




// Chapter 2PS
// Problem No 1

/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Problem No 2
/*
let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}
*/
// Problem No 3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/