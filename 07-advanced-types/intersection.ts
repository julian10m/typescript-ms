type typeA = {
    name: string 
}

type typeB = {
    role: string
}

// We create a type that requests both name and role.
type typeIntersect = typeA & typeB;


const pepe: typeIntersect = {
    name: 'hola',
    role: 'world class'
}

