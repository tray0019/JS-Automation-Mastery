/*
*   - Variable and Scope 
*/

const region = "Ontario"; // constant wont change
let loginAttempts = 0;     // will change
const isProduction = false;

function loginMessage(user, success){
    const stamp = new Date().toISOString();
    
    //return `${stamp} [${success ? "PASS" : "FAIL"}] ${user} from ${region}`;
    let status;

    if(success){
        status = "PASS";
    }else{
        status = "FAIL";
    }

    return `${stamp} [${status}] ${user} from ${region}`;
}

console.log();
console.log(loginMessage("Rustom",true));
loginAttempts++;
console.log("Login attempts:",loginAttempts);

console.log();

// region = "Quebec"; - won't work beacuse of const
{
    let loginAttempts = 99;
    console.log("Inner block attempts:",loginAttempts);
}

console.log("Outer block attemps:",loginAttempts);

console.log();
const baseUrl = "https://saucedemo.com"
const username = "rustom"
const password = "secret";
console.log(`Testing login for ${username} on ${baseUrl}`);
console.log("Testing login for " + username + " on " + baseUrl);



