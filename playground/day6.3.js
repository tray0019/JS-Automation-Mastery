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

