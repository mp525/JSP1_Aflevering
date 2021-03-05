const http = require('http');
const info = require("./ex1");
const DOS_Detector = require("./dosDetector");

const detector = new DOS_Detector(1000);

detector.on("DosDetected", (e)=>{
    console.log("DosDetected", e);
});

const server = http.createServer((req, res) => {
    detector.addUrl(req.url);
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(info));
    //Return a response with OS-info, using the code implemented in part-a
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
    console.log("Client with ip " + sock.remoteAddress + " has connected.");
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
