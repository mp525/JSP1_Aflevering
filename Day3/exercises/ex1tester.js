const randoms = require("./ex1b");
const http = require('http');

//randoms.makeRandPar([48,40,32,24,16,8]).then(results=>{console.log(results)})

async function tester(){
    const results = await randoms.makeRandPar([48,40,32,24,16,8]);
    //console.log(results);
    return results;
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/securerandoms') {
    res.setHeader('Content-Type', 'application/json');
  
        const results = tester();
        res.write(JSON.stringify(results));
    
    getRands();
    
    
    
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write("hej");
    return res.end();
  }
});

server.listen(3000);

//tester();