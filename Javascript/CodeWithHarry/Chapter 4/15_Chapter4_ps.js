let str = "Krishna\"";
console.log(str.length);

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox', word2 = 'fox2';
console.log(sentence.includes(word));
console.log(sentence.includes(word2));

console.log(sentence.toLowerCase());


let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);
