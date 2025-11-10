/*
*   - Variable and Scope 
*/

const region = "Ontario";
let loginAttempts = 0;
const isProduction = false;

function loginMessage(user, success){
    const stamp = new Date().toISOString();
    return `${stamp} [${success ? "PASS" : "FAIL"}] ${user} from ${region}`;

}

console.log(loginMessage("Rustom",true));
loginAttempts++;
console.log("Login attempts:",loginAttempts);