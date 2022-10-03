const array = []
const array1 = Array()

/*matrix*/ 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]   

matrix[0][0] //1
matrix[2][0] //7

a[0] //1
a[1] //2
a[2] //3

/*You can initialize a new array with a set of values using this syntax*/
Array(12).fill(0) 

const a = [1, 2, 3]
a.length //3

const a = [1, 2, 3]
a //[ 1, 2, 3 ]
a.length = 2
a //[ 1, 2 ]

/*add an item to an array*/ 
a.push(4)

/*We can add an element at the beginning of an array using the unshift() method*/
a.unshift(0)
a.unshift(-2, -1) 

/*remove an item to an array*/
a.pop()

/*We can remove an item from the beginning of an array using the shift()
method*/
a.shift() 

/*join two or more arrays*/
// C1:
const a = [1, 2]
const b = [3, 4]
const c = a.concat(b) //[1,2,3,4]
a //[1,2]
b //[3,4] 

// C2:
const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]
c //[1,2,3,4]

/*find a specific item in the array*/
a.find((element, index, array) => {
    // return true or false
})

a.find(x => x.id === my_id)

id === my_id

a.findIndex((element, index, array) => {
    //return true or undefined
})

a.includes(value)
