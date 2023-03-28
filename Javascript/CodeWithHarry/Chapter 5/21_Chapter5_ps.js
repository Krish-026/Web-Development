const promt = require("prompt-sync")();

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = promt("Enter a number : ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83], a;
do{
    a = promt("Enter a number : ");
    a = Number.parseInt(a);
    arr.push(a);
}while(a != 0);
console.log(arr);
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let temp = arr.filter((element)=>{
    return element%2 == 0;
});
console.log(temp);
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let temp = arr.map((element)=>{
    return element*element;
});
console.log(temp);
*/

let arr = [1, 2, 3, 4, 5, 6];
// Print Factorial
let temp = arr.reduce((a, b)=>{
    return a*b;
})
console.log(temp);