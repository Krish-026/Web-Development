// try{
//     let a = 0;
//     console.log(code);
//     console.log("Program ran successfully");
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error);
//     console.log("This is an Error");
// }
// finally{
//     console.log("I will always run even if try or catch return something in function")
// }





// try{
//     let a = 0;
//     console.log("Program ran successfully");
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error);
//     console.log("This is an Error");
// }
// finally{
//     console.log("I will always run even if try or catch return something in function")
// }

const fun = ()=>{
    try{
        let a = 0;
        console.log("Program ran successfully");
        return;
    }
    catch(error){
        console.log(error.name);
        console.log(error.message);
        console.log(error);
        console.log("This is an Error");
    }
    finally{
        console.log("I will always run even if try or catch return something in function")
    }
}
fun();
console.log("Outside fun()");