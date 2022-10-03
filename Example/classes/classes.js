// Let's take a person object:
const person = {
    name: 'Flavio'
}

/* We can create a class named Person (note the capital P , a convention
when using classes), that has a name property: */
class Person {
    name
}

// Now from this class, we initialize a flavio object like this:
const flavio = new Person();

// We can set the value of the name property:
flavio.name = 'Flavio';

// and we can access it using
flavio.name

/* Classes can hold properties, like name , and methods.
Methods are defined in this way:*/
class Person {
    hello() {
        return 'Hello, I am Flavio'
    }
}

// constructor
class Person {
    constructor(name) {
        this.name = name
    }

    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}

const flavio = new Person('flavio')
flavio.hello() // => 'Hello, I am flavio.'

class Person {
    static genericHello() {
        return 'Hello'
    }
}

Person.genericHello() //Hello
