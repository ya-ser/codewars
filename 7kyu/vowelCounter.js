/* Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  // delcare array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // make string lowercase
  const newStr = str.toLowerCase();
  // inital value for total vowels
  let sum = 0;
  // loop through string
  for (let c in newStr) {
    // if letter in string is a letter in our array, count it
    if (vowels.includes(newStr[c])) {
      sum++;
    }
  }
  // return the sum
  return sum;
}
