const prompt = require("prompt-sync")();
let obj = {
    1: "Snake",
    2: "Water",
    3: "Gun",
}
let getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let choice = 1;
do {
    console.log("Enter you choice : \n1 : Snake\n2 : Water\n3 : Gun\n4 : Exit\n\n\n");
    choice = prompt("Enter : ");
    choice = Number.parseInt(choice);

    if (choice == 4){
        console.clear();
        console.log("Successfull Exit");
        break;
    }
    let comp = getRndInteger(1, 3);
    while (choice == comp) {
        comp = getRndInteger(1, 3);
    }
    console.clear();

    console.log("Your Move : ", obj[choice]);
    console.log("Computer Move : ", obj[comp]);

    if (choice == 1) {
        if (comp == 2)
            console.log("You won");
        else console.log("Computer Won");
    }
    else if (choice == 2) {
        if (comp == 3)
            console.log("You won");
        else console.log("Computer Won");
    }
    else if (choice == 3) {
        if (comp == 1)
            console.log("You won");
        else console.log("Computer Won");
    }
    else {
        console.log("Wrong CHoice !!!");
        continue
    }
    console.log("\n\n\n\nDo you want to play?\nEnter Your choice : \n1 : Yes\n2 : No ");
    choice = prompt();
    if (choice == 1) {
        console.log("Get Ready For Next Round : ");
        console.clear();
    }
    else {
        console.clear();
        console.log("Successfull Exit");
        break;
    }
    
} while (choice != 4);