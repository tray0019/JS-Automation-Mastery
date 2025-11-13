/**
 *  --- Day 5: Async Basic
 */

// -- Promise -- 
console.log("--- Promise ---");

const wait300ms = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Waited 300ms");
        resolve("done");
    }, 300);
});

wait300ms.then((result) => {
    console.log("Promise resolved with:",result);
});

/**
 * Rejection
 */
console.log();
console.log("--- Add Rejection ---");
const mightFail = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if(success) resolve ("Everything worked!");
        else reject("Something went wrong!");
    }, 500);
});

mightFail
    .then(msg => console.log("✅",msg))
    .catch(err => console.log("❌", err));


/**
 * Reusable function
 */
console.log();
console.log("--- Turn it into a Reusable Function --- ");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(200).then(() => console.log("Waited 200ms (via delay function)"));


/**
 *  Async / Await Syntax
 */

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

/**
 * --- Error Handling with try/catch
 */

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

