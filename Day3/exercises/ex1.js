const crypto = require("crypto");

function random() {
  let title = "6 Secure Randoms";
  let randoms = [];
  let size = 48;
  for (let i = 0; i < 6; i++) {
      let secureHex = "";
    crypto.randomBytes(size, function (err, buffer) {
      secureHex = buffer.toString("hex");
    });
    
    randoms.push({length:size , random:secureHex})
      size = size - 8;
  }
  return {title, randoms};
}

const obj = random();
console.log(obj);