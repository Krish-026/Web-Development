// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 3");
//     }, 3000);
// });




// It runs one by one
// p1.then((value)=>{
//     console.log("P1 .then(value) " + value);
// })
// p2.then((value)=>{
//     console.log("P2 .then(value) " + value);
// })
// p3.then((value)=>{
//     console.log("P3 .then(value) " + value);
// })





// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("Value 1");
//         reject(new Error("Error Encounter"));
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 2");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 3");
//     }, 3000);
// });


// TO use when all promises are resolved
// let promise_all = Promise.all([p1, p2, p3]); // If any error occured non of will executed . Basically AND operation
// promise_all.then((value)=>{
//     console.log(value);
// })




// It will display all the status
// let promise_all = Promise.allSettled([p1, p2, p3]); // If any error occured non of will executed . Basically AND operation
// promise_all.then((value)=>{
//     console.log(value);
// })



// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("Value 2");
//         reject(new Error("Error Encounter"));
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 3");
//     }, 3000);
// });

// let promise_race = Promise.race([p1, p2, p3]);
//     console.log(value);
// })




//Promise.any()
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("Value 1");
//         reject(new Error("Error Encounter"));
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve("Value 2");
//         reject(new Error("Error Encounter"));
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Value 3");
//     }, 3000);
// });

// let promise_any = Promise.any([p1, p2, p3]); 
// promise_any.then((value)=>{
//     console.log(value);
// })



// let promise_resolve = Promise.resolve("Resolve Called"); 
// promise_resolve.then((value)=>{
//     console.log(value);
// })

let promise_reject = Promise.reject("Reject Called"); 
promise_reject.then((value)=>{
    console.log(value);
})