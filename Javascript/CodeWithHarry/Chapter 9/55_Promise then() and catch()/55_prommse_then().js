// // resolve
// let p1 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         console.log("I am a promise and I am fullfilled");
//         resolve(true);
//     }, 5000)
// });
// console.log(p1);
// // reject
// let p2 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         console.log("I am a promise and I am rejected");
//         reject(new Error("I am an error"));
//     }, 5000)
// });
// console.log(p1, p2);







// resolve
let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am fullfilled");
        resolve(true);
    }, 5000)
});
console.log(p1);
// reject
let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am rejected");
        reject(new Error("I am an error"));
    }, 5000)
});
p1.then((value)=>{ // resolve uses then
    console.log("then(value) : " + value);
})

p2.catch((error)=>{
    console.log("catch(value) : " + error);
})

// p2.then((value)=>{
//     console.log(value);
// }, (error)=>{
//     console.log(error);
// })