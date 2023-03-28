console.log(console);
console.log("Hello");
console.error("This is an error");
console.assert(5 > 54);
console.assert(555 > 54);

const obj = {
    a: 1,
    b: 2, 
    c: 3,
};

console.table(obj);
console.warn("Hi Study Properly");
console.info("info");

console.time("HI");
console.timeEnd("HI");

console.time("forLoop");
for(let i = 1; i < 100; ++i)
    console.log(i);
console.timeEnd("forLoop");
