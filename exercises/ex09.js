/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert 
these strings into camel cased strings.

? Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Your code here
  let split = input.split(" ");
  let res = [split[0]]
  for (let i = 1; i < split.length; i++) {
    let word = split[i];
    word = word.split("");
    word[0] = word[0].toUpperCase();
    res.push(word.join(""));
  }



  return res.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
