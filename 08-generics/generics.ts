const numbers_array: number[] = [1, 2 ,3]
const numbers_array_2: Array<number> = [4, 5, 6]

type DataStore<T> = {
    [prop: string]: T
}

const store: DataStore<number | boolean> = {}
store.love = 10 
store.happy = false 

function merge<T, U>(a: T, b: U) {
    return [a, b]
}

const merged = merge(1, 10)
const merged_2 = merge(1, 'a')

function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b }
}

const obj = mergeObj({ love: 10 }, { happy: false })
const obj_2 = mergeObj({ love: 10, water: 100 }, { happy: false })

class User<T> {
    constructor(public id: T) {}
}

const userString = new User('hola')
const userNumber = new User(10)

interface Pepe<T> {
    water: T 
}


