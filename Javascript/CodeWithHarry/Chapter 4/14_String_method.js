let nam = "Krishna\"";
// Size \" is considered as one in escape sequence
console.log(nam.length);

nam = "Krishna";
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
// Slice from [start, end)
console.log(nam.slice(2, 5));
console.log(nam.slice(2));

console.log(nam.replace("K", "T"));
let friend = "Abc"
console.log(nam.concat( " is a friend of ", friend, " Ok!!"));
let friend2 = "    ABC    ";
console.log(friend2);
console.log(friend2.trim());


// Strings are immutable
// friend2[1] = 'A'; Error