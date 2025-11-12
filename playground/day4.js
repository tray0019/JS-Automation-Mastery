/**
 * --- Day 4: ES Modules ---
 */

// Second import
import {assert, equals } from "..//utils/assert.js"

// import defaults + named exports
import max, { sum, average } from "../utils/math.js";

const numbers = [2,5,9,4,1]
console.log("Sum:",sum(numbers));
console.log("Average:",average(numbers));
console.log("Max:",max(numbers));


/**
 * Combining more Modules from 
 */

console.log();
console.log("--- Combined import ---");
equals(5,5, "They must match");
assert(1<2, "Math broken");

 console.log("All assertion passed");
 





