// nn bb ss u - Primitives in JS - 7 types
let a = null; // Null
let b = 100; // Number
let c = true; // boolean
let d = BigInt("200") + BigInt("50"); // BigInt
let e = "Krishna"; // String
let f = Symbol("I am a symbol"); // Symbold
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof g);

// Non Primitive Data Type - Objects in Js

const item = {
    "Krish" :true,
    "Krishna" : true,
    "Abc" : false,
    "Lovish" : 67,
    "Rohan" : undefined
}

console.log(item["Krish"], item["Abc"]);
