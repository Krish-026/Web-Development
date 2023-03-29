
let learnPromise = new Promise(function(resol, reject){
    console.log("Hello Promise");
    resol(56);
})

console.log("Hello 1 : ");
setTimeout(function(){
    console.log("Hello 2 in 2 seconds");
}, 2000);
console.log("Hello 3");
console.log(learnPromise)