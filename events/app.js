const math = require("./math");

console.log(math.sum(2, 3));
console.log(math.diff(2, 3));

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("math", (num1, num2) => {
  console.log("Event occurred: " + (num1 + num2));
});

eventEmitter.emit("math", 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let p = new Person("Pedro");

p.on("name", () => {
  console.log("My name: " + p.name);
});

p.emit("name");

const fs = require("fs");

// fs.writeFile('./out.txt', "This is data.", (err)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File created.")
//         fs.readFile('./out.txt', "utf8",(err, file)=>{
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// });

// fs.rename('out.txt', 'out2.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully renamed.");
//     }
// });

// fs.appendFile('out.txt', "This is new data.\n", (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully appended.");
//     }
// });

// fs.unlink('out.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully deleted.");
//     }
// });

// fs.mkdir('out', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully directory created.");
//     }
// });

// fs.rmdir('out', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully dir deleted.");
//     }
// })

/*
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});


let num1 = Math.floor(Math.random() * 10 - 1);
let num2 = Math.floor(Math.random() * 10 - 1);
let sum = num1 + num2;

rl.question(`what is ${num1} + ${num2}? \n`, (userInput)=> {
    if(userInput.trim() == sum) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect! Try Again.\n');
        rl.prompt();
        rl.on('line', (userInput) => {
            if(userInput.trim() == sum) {
                rl.close();
            } else {
                rl.setPrompt("User input incorrect! Try Again.\n");
                rl.prompt();
            }
        });
    }
});

rl.on('close', ()=>{
    console.log("Correct!")
});

*/
