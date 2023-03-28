
/* Map
let arr = [45, 23, 21];

// map perform on new array
// arr.map((value)=>{
//     console.log(value);
// });
let a = arr.map((value)=>{
    console.log(value);
    return value*10;
});
console.log(a, arr);

arr.map((value, index)=>{
    console.log(value, index);
    return value*10;
});

arr.map((value, index, arr)=>{
    console.log(value, index, arr);
    return value*10;
});

*/

/*
// Array filters method
let arr = [1, 2, 3, 30, 40, 32, 44];
let temp = arr.filter((a)=>{
    return a < 10;
});
console.log(temp, arr);

*/

// Array reduce method

let arr = [1, 2, 3, 4, 5];
let temp = arr.reduce((element1, element2)=>{
    console.log(element1, element2);
    return element1 + element2;
});
console.log(temp, arr);

