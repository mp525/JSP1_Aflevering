const fs = require("fs");
const path = require("path");

function func(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    //ext = "." + process.argv[3];
    list.filter((item) => {
      if (path.extname(item) === ext) {
       // console.log(item + "\n");
        callback(item + "\n");
      }
    });
  });
}

module.exports = func;
