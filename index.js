// const { objDisplay } = require("chai/lib/chai/utils");

// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// let newArr = [];

// function writeCards(["Guadalupe", "Ollie", "Aki"], "surprise") {
//     for (let i = 0; i < writeCards[0].length; i++){
//         newArr.push(`Thank you, ${writeCards[0][i]}, for the wonderful ${surprise} gift!`);
//         debugger;
//     }
//     return newArr;
// }
// writeCards(["Guadalupe", "Ollie", "Aki"])

let newArr = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
        return newArr;
 }

 function countDown(int){
    let i = 10;
    while (i >= 0){
    console.log(i);
    i--;
    }
    return int;
}