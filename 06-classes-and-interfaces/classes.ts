// Basics 
class BetterUser {
    constructor(public name: string, public age: number) {}
}


class MehUser {
    // Private properties with a leading underscore
    protected _firstName: string = ''; // can be accessed in classes that extend this class
    private _lastName: string = ''; // only available inside this class

    readonly hobbies: string[] = []; // --> readonly, can only be read...it will be a new list per new object.

    static eid = 'USER'; // static, hence accessed via the class name

    static greet() { // used as -> class.greet()
        return 'Meoow!';
    }

    // Getters 
    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get fullName() { // could be a method, but like this we access it as u.fullName instead of u.fullName()
        return `${this.firstName} ${this.lastName}`
    }

    // Setters

    set firstName(name: string) {
        if (name.trim() === '')
            throw new Error('Invalid name')
        this._firstName = name
    } 

    set lastName(name: string) {
        if (name.trim() === '')
            throw new Error('Invalid name')
        this._lastName = name   
    }

}

// Inheritance

class Employee extends MehUser {
    constructor(public jobTitle: string) {
        super(); // to call the constructor of the class from which we inherited.
    }

    work() {
        console.log(this._firstName); 
        // console.log(this._lastName); -> cannot access, it's private
    } 
}

// Abstract and concrete classes 

abstract class UIElement { 
    constructor(public identifier: string) {}

    clone(targetLocation: string) {

    }
}

class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
        this.position = position
    }
}

const meh = new Employee('AP') // call constructor
console.log(meh.jobTitle) // public variable
meh.firstName = 'Pepo' // setter
meh.lastName = 'DF' // setter
console.log(meh.firstName, meh.lastName, meh.fullName) // getters
console.log(MehUser.eid) // static property ...console.log(meh.eid) would not work since it's a staticmethod
console.log(MehUser.greet()) // static method


const uiElement = new SideDrawerElement('bla', 'left') // new UIElement() would give error!