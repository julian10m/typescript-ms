type FileSource = {
    type: 'file',
    path: 'bla.csv'
}

type DBSource = {
    type: 'db',
    connectionURL: 'some-url'
}

type Source = FileSource | DBSource;

const isFile = function(source: Source) {
    return source.type === 'file'
}

const loadData = function(source: Source) {
    if(isFile(source)) { 
        // ('path' in source) works but we can put the logic in a function
        // Also since we have type in both, now TS knows how to differenciate both
        console.log(`The path is ${source.path}`)
        return;
    }
    // Source can only be DBSource at this point
    console.log(`The DB is at URL ${source.connectionURL}`)
}

class User {
    constructor(public name: string) {}

    join() { 
        // ...
    }

}

class Admin {
    constructor(permissions: string[]) {}

    scan() {
        // ...
    }
}

const user = new User('Pepo');
const admin = new Admin(['ban', 'restore'])

type Entity = User | Admin

const init = function(entity: Entity) {
    if(entity instanceof User) {
        // typeof does not work, only primitives
        entity.join();
        return;
    }
    entity.scan()
}
