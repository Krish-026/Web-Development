// const prompt = require("prompt-sync")();

// Syncronous Programming
// let a = prompt("What is your name? ");
// let b = prompt("What is your age? ");
// let c = prompt("What is your favorite color? ");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");


// Asynchronous Programming
// console.log("Start");
// setTimeout(function(){
//     console.log("Hey I am good");
// }, 3000
// );
// console.log("End");



// Callbacks
// function loadScripts(src){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("Loaded script with SRC : " + src);
//     }
//     document.body.appendChild(script);
// }

// loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")



// Callback
// function loadScripts(src, callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("Loaded script with SRC : " + src);
//         callback(src);
//     }
//     script.onerror = function(){
//         console.log("Error loaded script with SRC : " + src)
//     }
//     document.body.appendChild(script);
// }

// function hello(srcArguement){
//     alert("Hello World " + srcArguement);
// }

// function goodMorning(){
//     alert("Good Morning");
// }

// loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" , hello)
// Error Scrip
// loadScripts("https://cdn.jsr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" , hello)


// Error Handling
function loadScripts(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC : " + src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loaded script with SRC : " + src)
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(someError, srcArguement){
    if(someError){
        console.log("Hello " + someError);
        return;
    }
    alert("Hello World " + srcArguement);
}

function goodMorning(someError, srcArguement){
    if(someError){
        console.log("Good Morning "+ someError);
        return;
    }
    alert("Good Morning " + srcArguement);
}

// loadScripts("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" , hello)
// Error Scrip
loadScripts("https://c.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" , goodMorning)



