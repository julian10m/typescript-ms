type AppUser = {
    name: string, 
    age: number, 
    permissions: {
        id: string, 
        title: string,
        description: string,
    }[];
}

type Perms = AppUser['permissions'];