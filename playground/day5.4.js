/**
 *  Async / Await Syntax
 */
import { delay } from "./day5.3.js"

console.log();
console.log("--- Async / Await Syntax ---");

async function run(){
    console.log("Start...");
    await delay(500);//pause
    console.log("Half a second passed!");
    await delay(300);
    console.log("✅ Finished!");
}

run();