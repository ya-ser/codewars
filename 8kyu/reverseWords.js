/* Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  // Split words in string into an array
  const words = str.split(' ');
  // map over each word, split word into array of characters, reverse it, and rejoin it
  const reverse = words.map(word => word.split('').reverse().join(''));
  // join the array of reversed words back to a string with a space between the reversed words
  return reverse.join(' ');
};