const fs = require('fs')
const buff = fs.readFileSync(process.argv[2]);
const str = buff.toString();
const splitted = str.split("\n");
const num = splitted.length -1;
console.log(num);