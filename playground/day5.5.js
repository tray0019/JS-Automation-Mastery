/**
 * --- Error Handling with try/catch
 */

import { delay } from "./day5.3.js"

console.log();
console.log("--- Error Handling with try/catch ---");

async function randomTask(){
    const success = Math.random() > 0.5;
    await delay(300);
    if(!success) throw new Error("Task failed!");
    return "Task succeeded!";
}

async function runTask(){
    try {
        const result = await randomTask();
        console.log("✅", result);
    } catch (err) {
        console.error("❌", err.message);
        
    }
}

runTask();