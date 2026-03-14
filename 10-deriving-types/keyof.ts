type User = {
    name: string,
    age: number,
};

type UserKeys = keyof User;

let validKey: UserKeys;
validKey = 'name'; // As we write = '' then it only allows
validKey = 'age';  // name or age, and no other option

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if(val === undefined || val === null) {
        throw new Error('Accessing undefined or nulll');
    }
    return val 
}

const user = { name: 'Pepo', age: 35 }
getProp(user, 'name') // TS helps to autocomplete name

const something = { propA: 'A', propB: true, propC: 10}
// It also knows the types of valX! :D 
const valA = getProp(something, 'propA');
const valB = getProp(something, 'propB');
const valC = getProp(something, 'propC');