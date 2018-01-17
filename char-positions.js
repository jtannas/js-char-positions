'use strict';

/**
 * Spaces are not excluded so that people counting through the index positions
 * won't 'Wtf?' at the missing indexes.
 */
const indexLetters = function returnObjOfEachCharPositionsInString(str) {
  const charSet = new Set(str);
  const charCounts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCounts[char] === undefined) { charCounts[char] = []; }
    charCounts[char].push(i);
  }
  return charCounts;
};

const myArgs = process.argv.slice(2);
for (const arg of myArgs) {
  console.log(indexLetters(arg));
}
