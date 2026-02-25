// Explicit types
let userIsMale: boolean;
let userName: string;
let userAge: number;

// Implicit types in assignment
let userAge2 = 10;
let age = 46;

// Functions
const add = (a: number, b = 5) => a + b;
console.log(add(10))

// Any an unions
let whatever: any = 10; // defeats the purpose of ts.
let controlledWhatever: string | number = 123;

whatever = 'pepe';
controlledWhatever = '12333';
controlledWhatever = []; // still fails

// Arrays, tuples
let hobbies = ['Sports', 'Cooking'];
hobbies.push(10);

let users: string[];
let usersHybrid: (string | number)[];
let usersHybridAlternative: Array<string | number> // Generic type

users = ["abc", 'def'];
users.push(100) // fails

usersHybrid = ['efg'];
usersHybrid.push(100) // works

usersHybridAlternative = ['efg', 1220];

let possibleResults: number[] = [1, -1]; // very generic!
possibleResults = [1, 5, 10] // can change it to any #elements

let possibleResultsStrict: [number, number] = [1, -1];
possibleResultsStrict = [3, 5];
possibleResultsStrict.push(100); // interesting that it does not fail!
possibleResultsStrict = [3, 123, 100];

// Objects 
let user: {
    name: string; 
    age: number | string;
    hobbies: string[];
    role: {
        desc: string;
        id: number;
    }
} = {
    name: 'Pepe',
    age: 100,
    hobbies: ['Eating'],
    role: {
        desc: 'Student',
        id: 10
    }
}

let val: {} = 'some text'; // {} any value that is not null
val = null;

// Object with a predified structure
let data: Record<string, number | string>;
data = {}
data = {
    val1: 10,
    val2: 'someString',
    100: 'wow',
    true: false
}

// Enums and types definitions
enum Role {
    Admin,
    Editor, 
    Guest,
}

let userRole: Role = Role.Admin;
userRole = Role.Guest;

let myRole: 'admin' | 'editor' | 'guest' = 'admin';
myRole = 'guest';

type RoleWithTypes = 'admin' | 'editor' | 'guest';
type User = {
    name: string; 
    age: number | string;
    hobbies: string[];
    role: {
        desc: string;
        id: number;
    }
}

const access = function(role: RoleWithTypes) {
    console.log(role);
}

// Functions

// Specify the return type 
const addNew = function(a: number, b: number ): number {
    return a + b;
}

// Use 'void' if there is no return
const log = function(message: string): void {
    console.log(message);
}

// Never -> will never return, it crashes, so we cannot assign what it returns.
const logAndThrow = function(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

// Higher order function
const performJob = function(cb: Function) {
    // do stuff and call cb.
    cb();
}

const performJobMoreSpecific = function(cb: (m: string) => void) {
    // do stuff and call cb.
    cb("120");
}

performJobMoreSpecific(log);

type greetingUser = {
    name: string,
    age: number, 
    greetingLine: () => string;
}

const myUser: greetingUser = {
    name: 'Jmdf',
    age: 35,
    greetingLine: () => 'hola amigo!'

}

// Null type 
let a: null | number; 
a = 10;
a = null; // Can assign null

let b: undefined | string; 
b = null; // it's not the same as null. 
b = 'what';
b = undefined;

const getC: () => number | null = () => 10
let c1 = getC(); // number or null 
let c2 = getC()!; // the ! tells ts to assume it is not null

// Reading values from Forms 
const inputEl = document.getElementById('user-name')!;
console.log(inputEl?.value) // It does not know there is a value...

// Overwriting the generic return.
const inputElFixed = document.getElementById('user-name') as HTMLInputElement | null;
console.log(inputElFixed?.value)

// Unknown is similar to any, but forces to add checks  
const process = function(val: unknown) {
    if(
        typeof val === 'object' 
        && !!val // is truthy
        && 'log' in val
        && typeof val.log === 'function'
    ) {
        val.log();
    }
}

// Optionals 
const generateError = function(msg?: string) {
    throw new Error(msg);
}

generateError();
generateError('with a custom message 8)');

// Nullish coalescing
let input = '';
// Checks if input is falsy, 0 values, undefined or null.
const didProvideInput = input || false; 
// Checks if input is null or undefined only
const didProvideInputFixed = input ?? false;
