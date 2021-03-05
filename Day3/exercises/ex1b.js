const crypto = require("crypto");

const makeSecureRandom = (size) =>
  new Promise(function (resolve, reject) {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) {
        return reject(err);
      }
      let secureHex = buffer.toString("hex");
      resolve({ length: size, random: secureHex });
    });
  });


/*   let randoms = [];
  let obj = {title:"6 Secure Randoms", randoms: randoms};
  makeSecureRandom(48)
  .then((result)=>{
      randoms.push(result);
  })
  .then(()=>{
      console.log(obj);
  })
  .catch(err=>{console.log("Error: " + err)})
 */
  async function makeRand(){
    let randoms = [];
    let obj = {title:"6 Secure Randoms", randoms: randoms};
    const r1 = await makeSecureRandom(48);
    const r2 = await makeSecureRandom(40);
    const r3 = await makeSecureRandom(32);
    const r4 = await makeSecureRandom(24);
    const r5 = await makeSecureRandom(16);
    const r6 = await makeSecureRandom(8);
    randoms.push(r1,r2,r3,r4,r5,r6);
    console.log(obj);
  }

  //console.log("Sync:")
  //makeRand();

  async function makeRandPar([a,b,c,d,e,f]){
    let randoms = [];
    let obj = {title:"6 Secure Randoms", randoms: randoms};
    const r1 =  makeSecureRandom(a);
    const r2 =  makeSecureRandom(b);
    const r3 =  makeSecureRandom(c);
    const r4 =  makeSecureRandom(d);
    const r5 =  makeSecureRandom(e);
    const r6 =  makeSecureRandom(f);
    //randoms.push(r1,r2,r3,r4,r5,r6);
    //console.log(obj);
    const results = await Promise.all([r1,r2,r3,r4,r5,r6])
    .then((list)=>{
        list.map(r=>{randoms.push(r)})
    })
    //console.log(obj);
    return obj;
  }

  //console.log("Async:")
  //makeRandPar();

  module.exports.makeRandPar = makeRandPar;
