const region = "Ontario"
let loginAttemps = 0;
const isProduction = false;

const loginMessage = (user, success) => {
    const stamp = new Date().toISOString();

    let status;

    if(success){
        status = "✅PASS";
    }else{
        status = "❌FAIL";
    }

    return `${stamp} [${status}] ${user} from ${region}`
}

console.log(loginMessage("Madara", true));
loginAttemps++;
console.log("Login Attemps:",loginAttemps);

{
    let loginAttemps = 99;
    console.log("Inner block attempt:",loginAttemps);
}

console.log();
const baseUrl = "https://saucedemo.com";
const username = "tom";
const passsword = "secret";
console.log(`Testing login for ${username} on ${baseUrl}`);

