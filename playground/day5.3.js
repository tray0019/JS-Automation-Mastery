
/**
 * Reusable function
 */
console.log();
console.log("--- Turn it into a Reusable Function --- ");

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(200).then(() => console.log("Waited 200ms (via delay function)"));
