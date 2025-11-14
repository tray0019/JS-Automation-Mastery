
/**
 * ----- Sequential vs Parallel
 */

// Sequential (one after another): Run in order
console.log("-- Sewuential (one after another");
const delay = (ms) => new Promise(res => setTimeout(res,ms));

async function sequentialDemo(){
    console.log("Start Sequential");
    
    await delay(500);
    console.log("Step 1 done");

    await delay(300);
    console.log("Step 2 done");

    await delay(200);
    console.log("Step 3 done");
    
    console.log("End Sequential\n");
}

sequentialDemo();


/**
 *  Parallel: useful when checking multiple conditions at once
 */

console.log();
console.log("--- Parallel ---");

async function parallelDemo(){
    console.log("Start Parallel");

    await Promise.all([
    delay(500).then(() => console.log("Task A done")),
    delay(300).then(() => console.log("Task B done")),
    delay(200).then(() => console.log("Task C done")),
]);

    console.log("End parallel\n");
}

parallelDemo();

/**
 * --- try/catch Patterns (Automation-Style)
 */

console.log();
console.log(" --- try/catch Patterns ---");
async function safeClick(fn) {
    try {
        await fn();
        console.log("Click success");
    } catch (err) {
        console.error("Click failed:",err.message);
    }
}

await safeClick(async ()=> {
    throw new Error("Element not clickable");
});


/**
 * --- Parallel vs Sequential Checks
 */

console.log();
console.log("--- Parallel vs Sequential Checks");

console.log("--- Sequential ---");

await $(`#item1`).waitForDisplayed();
await $(`#item2`).waitForDisplayed();
await $(`#item3`).waitForDisplayed();

console.log();
console.log("--- Parallel ---");

await Promise.all([
    $(`#item1`).waitForDisplayed(),
    $(`#item2`).waitForDisplayed(),
    $(`#item3`).waitForDisplayed(),
]);

/**
 * --- Polling (Custom waitUntil)
 */
console.log();
console.log("--- Polling (Custom waitUntil ----");

async function poll(checkFn, {timeout = 2000, interval = 100 } ={}){
    const start = Date.now();

    while (Date.now() - start < timeout){
        try {
            const result = await checkFn();
            if (result) return result;
        }catch (_){}
        await delay(interval);
    }
    throw new Error("Timeout: Poll condition not met");
}

let attempts = 0;

await poll(async () => {
    attempts++;
    console.log("Checking...", attempts);
    return attempts > 3;
});


