/**
 *  Objects & Arrays (Destructuring + Spread)
 */

// Day 3: Objects & Arrays
console.log("--- Objects & Arrays ---");
// Object example
const user = { name: "Rustom", role: "QA", active: true}

// Access values 
console.log(user.name);
console.log(user["role"]);

// Array example
const steps = ["Open site", "Login", "Verify dashboard" ];
console.log(steps[1]);


/**
 *  Destructuring
 */


// Objects
console.log();
console.log("--- Destructuring ---");
console.log("--- Objects ---");
const { name, role } = user;
console.log(`${name} works as ${role}.`);


// Arrays
console.log();
console.log("--- Arrays ---");
const [firstStep, secondStep] = steps;
console.log(`Step 1: ${firstStep}, Step 2: ${secondStep}`);


/**
 *  Spread(...) Operator
 */
console.log();
console.log("--- Spread(...) Operator ---");

// Clone or merge objects
const updateUser = {...user, active: false, lastLogin: "2025-11-10"}
console.log(updateUser);

// Combine arrays
const extraSteps = ["Logout", "Clone browser"];
const allSteps = [...steps, ...extraSteps];
console.log(allSteps);
