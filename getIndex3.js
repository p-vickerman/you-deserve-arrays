const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Enter an array: "));
let length = array.length

if (length < 4) {
    console.log(array[length-1]);
} else {
    console.log(array[3]);
} 