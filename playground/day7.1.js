console.log("--- Guard Clauses ---");
function assertNumber(value){
    if (typeof value !== "number"){
        throw new TypeError(`Expected number, got ${typeof value}`);
    }
}

assertNumber(10);
assertNumber("hello");
