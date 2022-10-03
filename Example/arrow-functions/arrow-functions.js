// syntax
function getData() {
    // ...
}
() => {
    // ...
}  
 
// Arrow functions are anonymous. We must assign them to a variable.
let getData = function getData() {
    // ...
}

// When we do so, we can remove the name from the function:
let getData = function() {
    // ...
}

// and invoke the function using the variable name
let getData = function() {
    // ...
}
getData()

//  arrow functions
let getData = () => {
    // ...
}
getData()

// If the function body contains just a single statement, you can omit the parentheses and write all on a single line
const getData = () => console.log('hi!')

// Parameters are passed in the parentheses:
const getData = (param1, param2) =>
    console.log(param1, param2)

const getData = (color = 'black', age = 2) => { 
//do something
}
