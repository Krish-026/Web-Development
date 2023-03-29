let p1 = new Promise((resolve, reject)=>{
    console.log("Hey I am not resolved");
    setTimeout(()=>{
        resolve(1);
    }, 2000)
})
p1.then((value)=>{
    console.log("Hurray  First.then(value) " + value);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4);
        }, 4000);
    })
}).then((value)=>{
    console.log("Hurray First Chaining after 4 seconds .then(value) " + value);
})
p1.then((value)=>{
    console.log("Congratulations this Promise is now resolved .then(value) " + value);
})
p1.then((value)=>{
    console.log("Hurray Third .then(value) " + value);
})