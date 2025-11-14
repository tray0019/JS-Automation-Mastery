
/**
 *  Parallel: useful when checking multiple conditions at once
 */

const delay = (ms) => new Promise(res => setTimeout(res,ms));

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