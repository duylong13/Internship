class Person {
    hello() {
    return 'Hello, I am a Person'
    }
}

// We can define a new class Programmer that extends Person :
class Programmer extends Person {

}

// Now if we instantiate a new object with class Programmer , it has access to the hello() method:
const flavio = new Programmer();
flavio.hello() //'Hello, I am a Person'

// Inside a child class, you can reference the parent class calling super() :
class Programmer extends Person {
    hello() {
        return super.hello() + '. I am also a programmer.'
    }
}
const flavio = new Programmer();
flavio.hello()