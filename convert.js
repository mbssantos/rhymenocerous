const fs = require('fs');
const json = require("./words.json");


const entries = json['kotus-sanalista'].st;




fs.writeFileSync(`words.txt`, JSON.stringify(entries.map(entry => {

  return entry.s;
  // console.log(entry.s);
})
));

// console.log(entries[0].s);
