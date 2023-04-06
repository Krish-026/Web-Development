var index = 0;
function changeColors(){
    console.log("Hello");
    var colors = ["red", "blue", "orange", "green", "yellow"];
    index = (index+1)%colors.length;
    document.getElementsByTagName("body")[0].style.background = colors[index];
    
}