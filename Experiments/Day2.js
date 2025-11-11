/**
 * Experiment 1
 */
const numbers = [1,2,3,4];

const doubled = numbers.map(n => {
    console.log("Mapping:",n);
    return n*2;
})

const doubled2 = numbers.map(function(n){
    return n*2;
});

console.log("Result",doubled)
console.log("Result2:",doubled2)


const result = numbers
    
    .map(n => n * 2)
    .map(n => n + 1)
    .filter(n => n > 5);

    console.log(result);