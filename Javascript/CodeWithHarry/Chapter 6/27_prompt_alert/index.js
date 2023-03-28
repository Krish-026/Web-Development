alert("Hello Your Scipts Works");
let a = prompt("Enter a number : ", "100");
a = Number.parseInt(a);
alert("You entered a of type " + (typeof a));
let writ = confirm("Do you want to display it on the page");
if(writ){
    document.write(a);
}
else{
    document.write("");
}