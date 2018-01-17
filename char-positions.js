'use strict';

const charIndexes = function returnArrayOfGivenCharIndexesWithinString(char, str) {
  const regex = new RegExp(char, 'g');
  const indexes = [];
  let regexMatch;
  while ((regexMatch = regex.exec(str)) !== null) {
    indexes.push(regexMatch.index);
  }
  return indexes;
};

/**
 * Spaces are not excluded so that people counting through the index positions
 * won't 'Wtf?' at the missing indexes.
 */
const indexLetters = function returnObjOfEachCharPositionsInString(str) {
  const charSet = new Set(str);
  const charCounts = {};
  for (const char of charSet) {
    charCounts[char] = charIndexes(char, str);
  }
  return charCounts;
};

const myArgs = process.argv.slice(2);
for (const arg of myArgs) {
  console.log(indexLetters(arg));
}
