/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. 
The following code block will describe all the casing styles to support. We may also receive an array of casing styles, 
and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  const caseing = (input, caze) => {
    let split, res;
    switch (caze) {
      // Camel casing
      case "camel":
        split = input.split(" ");
        res = [split[0]]
        for (let i = 1; i < split.length; i++) {
          let word = split[i];
          word = word.split("");
          word[0] = word[0].toUpperCase();
          res.push(word.join(""));
        }
        return res.join("");
      // Pascal casing
      case "pascal":
        split = input.split(" ");
        res = []
        for (let i = 0; i < split.length; i++) {
          let word = split[i];
          word = word.split("");
          word[0] = word[0].toUpperCase();
          res.push(word.join(""));
        }
        return res.join("");

      // Snake casing
      case "snake":
        return input.split(" ").join("_");

      // Kebab casing
      case "kebab":
        return input.split(" ").join("-");

      // Title casing
      case "title":
        split = input.split(" ");
        for (const i in split) {
          let aux = split[i].split("");
          for (const j in aux)
            j < 1 ? aux[j] = aux[j].toUpperCase() : aux[j] = aux[j].toLowerCase();
          split[i] = aux.join("");
        }
        return split.join(" ");

      // Vowel casing
      case "vowel":        
        return input.replace(/[aeiou]/g, (char) => char.toUpperCase());

      // Consonant casing
      case "consonant":
        return input.replace(/[^aeiou]/g, (char) => char.toUpperCase());
        
      // Upper casing
      case "upper":
        return input.toUpperCase();

      // Lower casing
      case "lower":
        return input.toLowerCase();

      default:
        return input;
    }
  }

  if (Array.isArray(caze)) {
    for (let i = 0; i < caze.length; i++)
      input = caseing(input, caze[i])
    return input;
  }
  else {
    return caseing(input, caze);
  }
};

// console.log(makeCaze("this is a string", "camel")); // thisIsAString
// console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
// console.log(makeCaze("this is a string", "snake")); // this_is_a_string
// console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
// console.log(makeCaze("this is a string", "title")); // This Is A String
// console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
// console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
