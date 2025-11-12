

/**
 *   --- Math ---
 */

export const sum = (arr) => arr.reduce((a,b) => a + b, 0 );

export const average =  (arr) => sum(arr)/arr.length;

export default function max(arr){
    return Math.max(...arr);
}
