// try{
//     harry
// }
// catch(err){
//     console.log(err);
// }




// try{
//     harry
// }
// catch(err){
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }


// Custom Error
// try{
//     throw new Error("New Custom Error")f
// }
// catch(err){
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }

// try{
//     throw new ReferenceError("New Custom Error")
// }
// catch(err){
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
//     console.log("Error Stack")
//     console.log(err.stack);
// }

// let prompt = require("prompt-sync")();
try{
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age > 120){
        throw new ReferenceError("This is Probably not True");
    }
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("Script is still running");