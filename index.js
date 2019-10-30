const FS = require('fs');
const HAYSTACK = FS.readFileSync('./words.txt', 'utf-8').toString().split('\n');

const needle = 'ytä';
const minLength = 4
const maxLength = 8;

const needleLength = needle.length

const results = HAYSTACK.filter(word => {
  const wordLength = word.length;
  const needleIndex = word.indexOf(needle);
  return wordLength >= minLength &&
    wordLength <= maxLength &&
    needleIndex >= 0 && needleIndex + needleLength === wordLength;
}).sort((a, b) => b.length - a.length);

FS.writeFileSync(`${needle}.json`, JSON.stringify(results));
