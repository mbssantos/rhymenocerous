const FS = require('fs');
const HAYSTACK = JSON.parse(FS.readFileSync('./words.json', 'utf-8'));

const needle = 'oita';
const minLength = 0;
const maxLength = 100;

const needleLength = needle.length

const results = HAYSTACK.filter(word => {
  const wordLength = word.length;
  const needleIndex = word.indexOf(needle);
  return wordLength >= minLength &&
    wordLength <= maxLength &&
    needleIndex >= 0 && needleIndex + needleLength === wordLength;
}).sort((a, b) => b.length - a.length);

FS.writeFileSync(`./output/${needle}.json`, JSON.stringify(results));
