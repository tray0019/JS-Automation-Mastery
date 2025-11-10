
/**
 * Excersise 1
 */

if(true){
    const env = "QA";
    console.log("Inside:", env);
}

console.log("Excersise 1");
console.log("Outside:", typeof env); // What happens?

//note - using typeof does not crash the program

//my answer error?
//answer is undefined

console.log();

/**
 *  Excersise 2 - Create a simple utility
 */

function toKebabCase(str){
    return str.toLowerCase().replace(/\s+/g, "-");
}

console.log("Excersise 2");
console.log(toKebabCase("Contact Page Displayed"));


console.log();
/**
 *  Excersise 3 - Write a function 
 *  logStatus(testName, passed)
 */

console.log("Excersise 3");
function logStatus(testName, passed){

    const symbol = passed ? "✅" : "❌";
    const message = `${symbol} ${testName}`;
    console.log(message);
    return message;
}

logStatus("Contact page displayed",true);
logStatus("Login failed due to wrong password",false);




