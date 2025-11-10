/**
 * Excersises 1
 */

function once(fn){
    let called = false;
    return (...args) => {
        if(called) return;
        called = true;
        fn(...args);
    }
}

const initDriver = once(() => console.log("WebDriver initialized")); 
initDriver();
initDriver();

/**
 * Exercise 2 
 */