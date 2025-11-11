/**
 *  Excercises
 */

// Excersise 1 - deepMerge
function deepMerge(a,b){
    return { ...a, ...b };
}

const merge = deepMerge({ env: "QA", baseUrl: "x"}, { timeout: 2000 });
console.log("Merge:", merge);

const addNew = {new: "added"};
const addBoth = { ...addnew, ...merge };
console.log(addBoth);

// Excersise 2 - pic(obj, keys)
// get back to this