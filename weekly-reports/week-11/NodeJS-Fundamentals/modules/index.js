const math = require('./maths');

console.log(math.add(8,9));
console.log(math.sub(8,9));

// we exported a object in maths.js
// so we can use dot operator on math variable which imports maths.js to access the properties or functions



// ++++++++++++++++++++  Another Method  +++++++++++++++++++++++

// console.log(math.mul(4,6));
// console.log(math.div(40,6));



// ++++++++++++++++++++  Another Method  +++++++++++++++++++++++

// to use directly, we can destructure the object

// const {add, sub} = require('./maths.js')
// console.log(add(8,9));
// console.log(sub(8,9));

// when using destructuring in Node.js, the variable names must match the exported object’s properties 
// ie. add & sub
