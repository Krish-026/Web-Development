let t = document.body.firstElementChild.firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tHead.firstElementChild)
let arr = Array.from(t.rows);
console.log(arr);
console.log(t.tBodies);
console.log(t.rows[0].rowIndex);
console.log(t.rows[1].rowIndex);
console.log(t.rows[2].rowIndex);