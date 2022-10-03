/*Declare*/
function getData() {
    // do something
}

/*A function can be run any times*/
getData() 

/*When we can pass an argument, we invoke the function passing parameters*/
function getData(color, age) {
    // do something
} 
getData('green', 24)
getData('yellow',)

/*We can check if a value is not undefined using this conditional*/
function getData(color, age) {
    // do something
    if (typeof age !== 'undefined') {
        // ...
    }
}

/*default values for parameters*/
function getData(color = 'black', age = 25) {
    //do something
}

/*A function has a return value. By default a function returns undefined 
, unless you add a return keyword with a value*/
function getData() {
    // do something
    return 'hi!'
}

// We can assign this return value to a variable when we invoke the function:
function getData() {
    // do something
    return 'hi!'
}
let result = getData()

// To return multiple values, you can return an object, or an array, like this:
function getData() {
    return ['Flavio', 37]
}
let [name, age] = getData()

// Functions can be defined inside other functions:
const getData = () => {
    const dosomething = () => {
        dosomething()
        return 'test'
    }
}