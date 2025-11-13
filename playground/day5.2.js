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

