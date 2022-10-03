/* Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(string) {
  // turn string into arr of strings
  const words = string.split(' ');
  // loop through each word of arr
  for (let word of words) {
    // if word is longer then 4 chars
    if (word.length > 4) {
      // split letters into arr, reverse it, and join it back to str
      let index = words.indexOf(word);
      let reversedWord = word.split('').reverse().join('');
      words.splice(index, 1, reversedWord);
    }
  }
  // join arr
  return words.join(' ');
}
