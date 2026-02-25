
// Arrow functions

const whatever = (a: number, b: number) => a + b; // 2 params
const whatever2 = (a: number) => console.log(a); // one param 
const whatever3: (a: number) => void = a => console.log(a); // actually no () needed if defined like this;

const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => console.log(event)) // but no need to have the parenthesis! 
    button.addEventListener('click', event => console.log(event))
}

// Spread operator
const oldStrings = ['s1', 's2'];
const allStrings = ['sn1', 'sn2'];

allStrings.push(...oldStrings);
console.log(allStrings);

const person = {
    name: 'Pepo',
    age: 35,
    list: ['hola']
}

const newPerson = person // copies the pointer!
newPerson.age = 36
console.log(person.age)

const newPersonFixed = { ...person }; // creates a new object copying the values...but it's a shallow copy, not a deep one!
newPersonFixed.age += 1 
newPersonFixed.list.push('chau') // this will also translate to person because list is a pointer...
console.log(person.age)
console.log(person.list) 


// Rest parameters
const hoho = (...numbers: number[]) => numbers.reduce((acc, now) => acc + now , 0)
const addedNumbers = hoho(1, 2, 3, 4);
console.log(addedNumbers);

// Array and object destructuring
const hs = ['h1', 'h2', 'h3', 'h4'];
const [h1, h2, ...otherHs] = hs;
console.log(h1, h2, otherHs)