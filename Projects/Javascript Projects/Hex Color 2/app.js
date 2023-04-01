let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hex_code = '#';
    for(let i = 0; i < 6; ++i){
        let randomIndex = Math.floor(Math.random()*hex_numbers.length);
        hex_code += hex_numbers[randomIndex];
    }
    console.log("#" + hex_code);
    document.body.style.backgroundColor = hex_code;
    color.textContent = hex_code;

})