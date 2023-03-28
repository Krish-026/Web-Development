let marks = [95, 96, 91, 99, null];
console.log(typeof marks);
console.log("The total Studen : " ,marks.length);
marks[5] = "Absent";
marks[6] = 100;
console.log(marks.length);
marks[9] = null;
console.log(marks.length);
for(let i in marks) console.log(marks[i] + " " + i);
console.log(marks[8]);

console.log(marks);