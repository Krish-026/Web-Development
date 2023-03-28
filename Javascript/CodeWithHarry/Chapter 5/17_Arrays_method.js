let num = [1, 2, 3, 80, 21];
console.log(typeof num);
let b = num.toString();
console.log(typeof b);

let c = num.join("_");
console.log(c, typeof c);

num.pop();
console.log(num);
let popElement = num.pop();
console.log(num, popElement);
num.push(popElement);
let numLength = num.push(popElement);
console.log(num, numLength);

// shift remove first element and modify orginal array
let shifNum = num.shift();
console.log(shifNum, num);

shifNum = num.unshift(shifNum); // Return array lenght
console.log(shifNum, num); // 

