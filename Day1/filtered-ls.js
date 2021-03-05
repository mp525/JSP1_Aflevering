const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
  let ext = "." + process.argv[3];
  let arr = list.filter((item) => {
    if (path.extname(item) === ext) {
        console.log(item)
      return item;
    }
  });
});
 