
export function assert(condition, message = "Assertion failed"){
    if(!condition) throw new Error(message);
}

export function equals(actual, expected, message = ""){
    if(actual != expected)
        throw new Error(message || `Expected ${expected}, got ${actual}`);
}