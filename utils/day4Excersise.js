
export const toKebab = str => str.toLowerCase().replace(/\s+/g,"-"); 
export const toSnake = str => str.toLowerCase().replace(/\s+/g,"_");
export default str => str.toUpperCase(); //default = toUpper