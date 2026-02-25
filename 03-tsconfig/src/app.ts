import * as fs from "node:fs"; // node module

// fs.readFileSync()
let userName: string; 

userName = 'Pepo';

console.log(userName);
/*
- tsc --init -> to create tsconfig.ts
- tsc (alone) -> to compile the project
- "rootDir": "./src"
- "outDir": "./dist"
- tsc --watch -> to watch for changes and recompile
- tsc -w -> same as before but shorter
- npm init -y -> to enable node on the project 
- npm install @types/node --save-dev -> so that typescript works on node
- add "node" in types = [] in tsconfig.ts
*/
const add = (a: number, b: number): number => a + b; 
console.log(add(2, 3));