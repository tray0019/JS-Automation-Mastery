/**
 * Day 2: Functions & Arrow Functions
 */

// --- Function declaration ---
console.log("Function Declaration");
function greet(name){
    return `Hello, ${name} !`;
}

console.log(greet("Tom"));
console.log();

console.log("Function Expression");
// --- Function expression ---
const farewell = function(name){
    return `Goodbye, ${name}.`;
}
console.log(farewell("Tom"));

console.log();
// --- Arrow function ---
console.log("Arrow Function");
const shout = (msg) => msg.toUpperCase();
console.log(shout("test completed"));



console.log();
// --- Default param ---
console.log("Default param");
function retry(task = "unknown", attempts = 3){
    console.log(`Retrying ${task} for ${attempts} attemps`);
}
retry("login");


/**
 * Default and Rest Parameters
 */

console.log();
// --- Rest param ---
console.log("Rest param");
function sumAll(...nums){ //...nums - taking number of argument and collecting into an array 
    return nums.reduce((a,b)=> a + b,0) ;
}

console.log("Sum:",sumAll(2,3,5,10));

/**
 * Short Arrow Functions
 */

console.log();
// Arrow functions in call back
console.log("Call Back");
const numbers = [1,2,3,4];
const doubled = numbers.map(n => n * 2);
console.log ("Doubled:",doubled);

console.log();
// Arrow functions in call back
console.log("Call Back");