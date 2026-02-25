interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

// Used in objects declarations 

let user: Authenticatable; 

user = {
    email: 'bla',
    password: 'hola',
    role: 'role', // the definition of the interfaces got merged! 
    login() {},
    logout() {},
}

console.log(user)

// Used to be implemented in classes

class AuthenticatableUser implements Authenticatable {
    constructor(
        public userName: string, // Added one additional property       
        public email: string, // The following are required
        public password: string, // because of the 
        public role: string, // interface definition
    ) {}

    login(){}
    logout(){}
}

const authenticate = function(user: Authenticatable) {
    user.login()
}


// Extending interface by merging

interface Authenticatable { role: string }

// With the extends keyword

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

