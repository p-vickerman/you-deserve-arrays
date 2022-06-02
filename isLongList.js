const prompt = require('prompt-sync')({sigint: true});

let array = JSON.parse(prompt("Enter an array: "));
let length = array.length

let boolTrue = true;
let boolFalse = false;

if (length >= 10){
    console.log(boolTrue)
}
else {console.log(boolFalse)
}
    
