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

/*
    10
     -  Định nghĩa key: value cho object
     -  Định nghĩa method cho object
     -  Định nghĩa key cho object dưới dạng biến   
 */

     var name   = 'javascript';
     var price  = 1000;

     var course = {
         name,
         price,
         getValue() {
             return name
         }
     }
     console.log(course.getValue())
// 8, 10
var array = ['javascript', 'php', 'ruby']

// var a = array[0]
// var b = array[1]
// var c = array[2]
// console.log(a, b, c)

var [c, ...hello] = array
console.log(c)
console.log(hello)

// 9 
var array1 = ['javacript', 'python', 'ruby']
var array2 = ['html', 'css']
var array3 = [...array1, ...array2]
console.log(array3)