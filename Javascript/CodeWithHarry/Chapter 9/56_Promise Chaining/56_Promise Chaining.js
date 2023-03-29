
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolve after 2 seconds");
//         resolve("Resolve P1 Done")
//     }, 2000);
// })
// p1.then((value) => {
//     console.log("P1.then(value) : " + value);
//     let p2 = new Promise((resolve, reject) => {
//         resolve("Resolve P2 Done");
//     })
//     return p2;
// }).then((value) => {
//     console.log("P2.then(value) : " + value);
//     console.log("We are Done");
//     return 3;
// }).then((value)=>{
//     console.log("Now its value : " + value);
// })




// p1.then((value) => {
//     console.log("P1.then(value) : " + value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolve P2 Done");
//         }, 2000)
//     })
//     return p2;
// }).then((value) => {
//     console.log("P2.then(value) : " + value);
//     console.log("We are Done");
// })








const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve(1);
        }
        script.onerror = ()=>{
            reject(0);
        }
    })
}

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
// p1.then((value)=>{
//     console.log("Script have been loaded .then(value) " + value);
// }).catch((error)=>{
//     console.log("We have some error " + error);
// });




let p2 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
p2.then((value)=>{
    console.log("Script 1 have been loaded .then(value) " + value);
    return loadScript("https://errorcdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
}).then((value)=>{
    console.log("Script 2 have been loaded .then(value) " + value);
}).catch((error)=>{
    console.log("We have some error " + error);
});