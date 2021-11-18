/* Rest parameters*/

function sum(...numbers){
    return numbers.reduce((prev, current)=> prev+current);
}

sum(1,4,6);


/* Spread operator*/

function sum(x,y){
    return x + y;
}

let nums = [4,6];

console.log(sum(...nums));