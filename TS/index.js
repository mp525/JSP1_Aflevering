import fetch from "node-fetch";
//const fetch = require("node-fetch");

function messageDelay(message, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const upperCase = message.toUpperCase();
            resolve(upperCase);
        }, delay);
    })
}

const promises = [
    messageDelay("hej", 1300),
    messageDelay("hi class", 700),
    messageDelay("hello world", 1700),
    messageDelay("promises er cool", 500)

]

Promise.any(promises).then((upperCased)=>{console.log(upperCased)})

/* 
messageDelay("Hi class", 1000)
.then(uMessage=>{console.log(uMessage)}); */

