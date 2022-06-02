const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Enter an array: "));
let length = array.length;
let arrayChar = array[0];


let boolTrue = true;
let boolFalse = false;

if (typeof arrayChar === 'number'){
    console.log(boolTrue)
}
else {console.log(boolFalse)
}
