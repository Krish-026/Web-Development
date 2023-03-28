const promt = require("prompt-sync")();

let marks ={
    Abc : 94,
    Def : 95,
    Ghi : 99,
    Jkl : 100,
}

// for(let i = 0; i < Object.keys(marks).length; ++i){
//     console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// for(let key in marks){
//     console.log("The Marks of " + key + " are " + marks[key]);
// }

// let cn = 4;
// let i;
// while(i != cn){
//     i = promt("Enter a number : ");
//     console.log("Enter Correct Number");
// }
// console.log("You have entered a correct number");


const mean = (a, b, c, d)=>{
    return (a+b+c+d)/4;
}

console.log(mean(4, 5, 6, 7));
