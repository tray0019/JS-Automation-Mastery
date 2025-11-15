
/**
 * Robust Error Handling & Timeout Patterns
 */

// Creating Custom Errors
console.log("--- Creating Custom Errors ---");

class TimeoutError extends Error {
    constructor(message = "Operation timed out"){
        super(message);
        this.name = "TimeoutError";
    }
}

class ConditionError extends Error {
    constructor(message = "Condition not met"){
        super(message);
        this.name = "ConditionError";
    }
}

throw new TimeoutError("Waited too long");

console.log();
console.log("--- GUard Clauses ---");


