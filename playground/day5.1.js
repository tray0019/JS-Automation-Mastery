// -- Promise -- 
console.log("--- Promise ---");

const wait300ms = new Promise((resolve) => {
    setTimeout(() => {
        console.log("✅Waited 300ms");
        resolve("done");
    }, 300);
});

wait300ms.then((result) => {
    console.log("Promise resolved with:",result);
});