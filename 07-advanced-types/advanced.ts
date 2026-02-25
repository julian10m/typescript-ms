type DataStore = {
    [prop: string]: number | boolean;
}

const store: DataStore = {};
store.id = 10;
store.whatever = true
store[100] = 10

let roles = ['admin', 'guest', 'editor'] as const; 
roles.push('pepe') // fails because it's a const! 
roles[0] = 'jojo' // same as before
const firstRole = roles[0]; // no problem reading

const dataEntries: Record<string, number> = {
    entry1: 0.51,
    entry2: -1.23
}

dataEntries.entry10 = 10
dataEntries.entry100 = 10

const otherEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

// The new method enforces the checks only
// The type is assumed literal from the definition
// Moreover we have also autocomplete.
otherEntries.entry10 = 10 // cannot modify

