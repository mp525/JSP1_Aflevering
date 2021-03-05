const fs = require("fs");

function callback(err, data) {
  //this._data = data;
  if (err) {
    return err;
  }
  //const str = data.toString();
  const splitted = data.split("\n");
  const num = splitted.length - 1;
  console.log(num);
}
//const buff = fs.readFile(process.argv[2], callback);
fs.readFile(process.argv[2], "utf8", function(err, data) {
    //this._data = data;
   
    //const str = data.toString();
    const splitted = data.split("\n");
    const num = splitted.length - 1;
    console.log(num);
  });

//console.log(str);
//const buff = callback.data;

//console.log(num);
