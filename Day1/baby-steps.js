const arr = process.argv;
let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
    
}

//const num = process.argv[2] + process.argv[3] + process.argv[4];

console.log(sum)