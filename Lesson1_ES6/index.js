// 1.   Let, const
// 2.   Template Literals
// 3.   Muti-line String
// 4.   Arrow function
// 5.   Classes
// 6.   Default parameter values
// 7.   Destructuring
// 8.   Rest parameters
// 9.   Spread
// 10.  Enhanced object literals
// 11.  Tagged template literal
// 12.  Modules



// 4
// - function bth
function logger(log) {
    console.log(log)
}
// - expression function
const loggers = function(log){
    console.log(log)
}
// - arrow function
const sum = (a,b) => a + b;
logger('loading.....')
loggers('Message....')
console.log(sum(2,2))