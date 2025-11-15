
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
