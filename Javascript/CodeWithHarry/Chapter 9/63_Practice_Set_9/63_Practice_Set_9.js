// const loadScript = async (src)=>{
//     return new Promise((resolve, reject)=>{
//         let  script = document.createElement("script");
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src + " Success Done");
//         }
//         document.head.append(script);
//     })
// }
// const main1 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main1()





// const loadScript = async (src)=>{
//     return new Promise((resolve, reject)=>{
//         let  script = document.createElement("script");
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src + " Success Done");
//         }
//         script.onerror = ()=>{
//             reject("Error");
//         }
//         document.head.append(script);
//     })
// }
// const main1 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://dn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main1()




// const loadScript = async (src)=>{
//     return new Promise((resolve, reject)=>{
//         let  script = document.createElement("script");
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src + " Success Done");
//         }
//         script.onerror = ()=>{
//             reject("Error");
//         }
//         document.head.append(script);
//     })
// }

// const main1 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     try {
//         let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//         console.log(a);
//     } catch (error) {
//         console.log(error);
//     }
//     console.log(new Date().getMilliseconds());
// }

// main1();


const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " Success Done");
        }
        script.onerror = () => {
            reject("Error");
        }
        document.head.append(script);
    })
}

//Problem 1

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//     console.log(value);
// })


// Problem 2
// const main1 = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }

// main1();




// Problem 3

// let p = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new Error("New error found"));
//         }, 3000)
//     })
// }

// let a = async()=>{
//     try{
//         let c = await p();
//         console.log(c);
//     }
//     catch(error){
//         console.log(error);
//         console.log("This error has been handled : " + error);
//     }
// }

// a();


// Problem 4

let p1 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}
let p2 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}
let p3 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
}

// await

const run = async()=>{

    // It will take lot of time. Use Promise.all method
    // console.time("run");
    // let a1= await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1);
    // console.log(a2);
    // console.log(a3);
    // console.timeEnd("run");




    console.time("run");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let promise_all = await Promise.all([a1, a2, a3]);
    console.log(promise_all)
    console.timeEnd("run");
}
run()

