const fs = require("fs");
require("log-timestamp");
//LOG PATH
const log = "./laravel.log";
var d = new Date();
var y = d.getFullYear();
console.log(`listening for laravel log`);
fs.watchFile(log, () => {
  let file = fs.readFileSync(log, "utf8");
  let arr = file.split(/\r?\n/);
  for (let line of arr.reverse()) {
    if (line.includes(y)) {
      console.log("Log" + ":" + line);
      break;
    }
  }
});
