const constString = 'PEpo';
let variableString = 'hola'

console.log(typeof constString);

type ConstVal = typeof constString; // type is 'PEpo' as constString is a const
type StringVal = typeof variableString; // type is string because of let

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['Pepo', 'Pepa']
}

type Settings = typeof settings

function loadSettings(settings: Settings) {
    // ...
}